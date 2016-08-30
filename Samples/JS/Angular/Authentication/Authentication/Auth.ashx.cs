using System;
using System.Collections;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Configuration;
using System.Web.Script.Serialization;

namespace Auth
{
    /// <summary>
    /// The Auth class provides user authentication services which are used by the
    /// 'wijmo.auth.Auth' class on the client.
    /// 
    /// The static method GetCurrentUser returns the current user as IPrincipal 
    /// object and that can be used to validate requests in 
    /// IHttpModule.AuthenticateRequest implementations.
    /// 
    /// This implementation of authentication services is based on this 
    /// Udacity course on Web development:
    /// https://www.udacity.com/course/web-development--cs253
    /// </summary>
    public class Auth : IHttpHandler
    {
        // Constants
        const int MIN_NAME_LENGTH = 2;
        const int MIN_PASSWORD_LENGTH = 4;
        const int COOKIE_AGE_IN_DAYS = 30;

        /// <summary>
        /// Enumeration that contains possible errors.
        /// </summary>
        enum AuthError
        {
            None,
            WrongPassword,
            UserNotFound,
            EmailTaken,
            InvalidEmail,
            InvalidName,
            InvalidPassword,
            CannotSendMail,
            InternalServerError
        }

        /// <summary>
        /// Enumeration that represents user roles.
        /// </summary>
        [Flags]
        public enum AuthRoles
        {
            User = 1,
            Customer = 2,
            Admin = 4,
            Support = 8
        }

        /// <summary>
        /// Handles all requests for this http handler.
        /// </summary>
        public void ProcessRequest(HttpContext context)
        {
            // require POST requests (not-cached, with side-effects)
            if (context.Request.RequestType != "POST")
            {
                throw new Exception("Invalid request");
            }

            // parse parameters
            Hashtable parms;
            var js = new JavaScriptSerializer();
            using (var sr = new System.IO.StreamReader(context.Request.InputStream))
            {
                var data = sr.ReadToEnd();
                parms = (Hashtable)js.Deserialize(data, typeof(Hashtable));
            }

            // get command
            string cmd = parms["cmd"] as string;
            if (cmd == null)
            {
                throw new Exception("Command not specified.");
            }

            // process command
            AuthResult result = null;
            switch (cmd.ToLower())
            {
                case "create":
                    result = CreateUser(context, parms);
                    break;
                case "login":
                    result = LogIn(context, parms);
                    break;
                case "loginoauth":
                    result = LogInOAuth(context, parms);
                    break;
                case "logout":
                    result = LogOut(context, parms);
                    break;
                case "change":
                    result = UpdateUser(context, parms);
                    break;
                case "reset":
                    result = ResetPassword(context, parms);
                    break;
                case "setdata":
                    result = SetUserData(context, parms);
                    break;
                default:
                    throw new Exception("Command not recognized: ** " + cmd + " **");
            }

            // set context user
            Debug.Assert(result != null);

            // return result
            context.Response.ContentType = "application/json";
            context.Response.Write(js.Serialize(result));
        }
        public bool IsReusable
        {
            get { return true; }
        }

        //-------------------------------------------------------------------------------
        #region ** other public methods
        
        /// <summary>
        /// Gets the user that is currently logged in.
        /// This method can be used to check for authorization from other services.
        /// </summary>
        public static IPrincipal GetCurrentUser(HttpContext context)
        {
            var email = ParseUserCookie(context);
            var ctx = new UsersEntities();
            var user = ctx.Users.FirstOrDefault(u => u.email == email);
            return new AuthUser(user) as IPrincipal;
        }

        #endregion

        //-------------------------------------------------------------------------------
        #region ** request handlers

        /// <summary>
        /// Creates a new user and logs him in.
        /// </summary>
        static AuthResult CreateUser(HttpContext context, Hashtable parms)
        {
            // get parameters
            var email = parms["email"] as string;
            var name = parms["name"] as string;
            var pw = parms["pw"] as string;
            var keep = parms["keep"] as string;

            // create the new user
            var result = CreateUser(email, name, pw, null);

            // no error? log in
            if (result.error == 0)
            {
                UpdateUserCookie(context, result, keep);
            }

            // return result
            return result;
        }
        /// <summary>
        /// Logs a user in.
        /// </summary>
        static AuthResult LogIn(HttpContext context, Hashtable parms)
        {
            // get parameters
            var email = parms["email"] as string;
            var pw = parms["pw"] as string;
            var keep = parms["keep"] as string;

            // if email and password not provided, log in from cookie
            if (string.IsNullOrEmpty(email) && string.IsNullOrEmpty(pw))
            {
                return LoginFromCookie(context);
            }

            // get and validate user
            var ctx = new UsersEntities();
            //System.Diagnostics.Debug.WriteLine("** number of users: {0}", ctx.Users.Count());
            var user = ctx.Users.FirstOrDefault(u => u.email == email);
            if (user == null)
            {
                return new AuthResult(AuthError.UserNotFound);
            }
            else if (!CheckPasswordHash(email, pw, user.password))
            {
                return new AuthResult(AuthError.WrongPassword);
            }

            // log in
            user.lastaccess = DateTime.Now;
            ctx.SaveChanges();
            var result = new AuthResult(user);
            UpdateUserCookie(context, result, keep);
            return result;
        }
        /// <summary>
        /// Logs a user in from information in the user cookie.
        /// </summary>
        static AuthResult LoginFromCookie(HttpContext context)
        {
            var result = new AuthResult(AuthError.None);
            var email = ParseUserCookie(context);
            if (!string.IsNullOrEmpty(email))
            {
                var ctx = new UsersEntities();
                var user = ctx.Users.FirstOrDefault(u => u.email == email);
                if (user != null)
                {
                    user.lastaccess = DateTime.Now;
                    ctx.SaveChanges();
                    result.user = new AuthUser(user);
                    UpdateUserCookie(context, result, "true");
                }
            }
            return result;
        }
        /// <summary>
        /// Logs a user in using an OAuth provider.
        /// </summary>
        static AuthResult LogInOAuth(HttpContext context, Hashtable parms)
        {
            // get parameters
            var provider = parms["provider"] as string;
            var token = parms["token"] as string;
            var keep = parms["keep"] as string;

            // check that we got a provider and a token
            if (string.IsNullOrEmpty(provider) || string.IsNullOrEmpty(token))
            {
                throw new Exception("Missing OAuth provider and/or token");
            }

            // use token to get the user name and email
            var name = string.Empty;
            var email = string.Empty;
            var wc = new WebClient();
            var js = new JavaScriptSerializer();
            switch (provider.ToLower())
            {
                case "google":
                    {
                        // use token to get user data from google
                        var url = "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token;
                        var r = wc.DownloadString(url);
                        dynamic userInfo = js.Deserialize<object>(r);

                        // get user name and email from response
                        name = userInfo["given_name"];
                        email = userInfo["email"];
                    }
                    break;

                case "facebook":
                    {
                        // use token to get user data from facebook
                        var url = "https://graph.facebook.com/me?access_token=" + token;
                        var r = wc.DownloadString(url);
                        dynamic userInfo = js.Deserialize<object>(r);

                        // get user name and email from response
                        name = userInfo["first_name"];
                        email = userInfo["email"];
                    }
                    break;

                default:
                    throw new Exception("OAuth provider missing or not supported: " + provider);
            }

            // get or create user
            AuthResult result;
            var ctx = new UsersEntities();
            var user = ctx.Users.FirstOrDefault(u => u.email == email);
            if (user != null)
            {
                user.provider = provider;
                ctx.SaveChanges();
                result = new AuthResult(user);
            }
            else
            {
                result = CreateUser(email, name, null, provider);
            }

            // no error? log in
            if (result.error == 0)
            {
                UpdateUserCookie(context, result, keep);
            }

            // return result
            return result;
        }
        /// <summary>
        /// Logs a user out and clears the user cookie.
        /// </summary>
        static AuthResult LogOut(HttpContext context, Hashtable parms)
        {
            UpdateUserCookie(context, null, null);
            return new AuthResult(AuthError.None);
        }
        /// <summary>
        /// Updates the information (name and/or password) for the current user.
        /// </summary>
        static AuthResult UpdateUser(HttpContext context, Hashtable parms)
        {
            // get parameters
            var pw = parms["pw"] as string;
            var newName = parms["newname"] as string;
            var newPassword = parms["newpw"] as string;
            var email = ParseUserCookie(context);

            // retrieve user email from cookie
            var ctx = new UsersEntities();
            var user = ctx.Users.FirstOrDefault(u => u.email == email);
            if (user == null)
            {
                return new AuthResult(AuthError.UserNotFound);
            }

            // check current password
            if (!CheckPasswordHash(email, pw, user.password))
            {
                return new AuthResult(AuthError.WrongPassword);
            }

            // change name
            if (IsValidName(newName))
            {
                user.name = newName;
            }

            // change password
            if (IsValidPassword(newPassword))
            {
                user.password = MakePasswordHash(email, newPassword, null);
            }

            // save changes and be done
            ctx.SaveChanges();
            var result = new AuthResult(user);
            UpdateUserCookie(context, result, "true");
            return result;
        }
        /// <summary>
        /// Resets the user password and sends the user an email with the new password.
        /// The email is sent using parameters specified in Web.config appSettings.
        /// </summary>
        static AuthResult ResetPassword(HttpContext context, Hashtable parms)
        {
            // get parameters
            var email = parms["email"] as string;

            // retrieve user by email
            var ctx = new UsersEntities();
            var user = ctx.Users.FirstOrDefault(u => u.email == email);
            if (user == null)
            {
                return new AuthResult(AuthError.UserNotFound);
            }

            // create new password
            var pw = MakeRandomString(Math.Max(MIN_PASSWORD_LENGTH, 6));
            Debug.Assert(IsValidPassword(pw));

            // notify user
            if (!NotifyUser(user.email, user.name, pw))
            {
                return new AuthResult(AuthError.CannotSendMail);
            }

            // reset the password
            user.password = MakePasswordHash(email, pw, null);
            Debug.Assert(CheckPasswordHash(email, pw, user.password));
            ctx.SaveChanges();

            // all done
            return new AuthResult(AuthError.None);
        }
        /// <summary>
        /// Gets or sets a string containing application data for a user.
        /// </summary>
        static AuthResult SetUserData(HttpContext context, Hashtable parms)
        {
            // get parameters
            var data = parms["data"] as string;
            var email = ParseUserCookie(context);

            // get user
            if (string.IsNullOrEmpty(email))
            {
                return new AuthResult(AuthError.UserNotFound);
            }
            var ctx = new UsersEntities();
            var user = ctx.Users.FirstOrDefault(u => u.email == email);
            if (user == null)
            {
                return new AuthResult(AuthError.UserNotFound);
            }
            user.data = data;
            user.lastaccess = DateTime.Now;
            ctx.SaveChanges();
            System.Diagnostics.Debug.WriteLine("- user data saved");
            return new AuthResult(user);
        }

        #endregion

        //-------------------------------------------------------------------------------
        #region ** implementation

        /// <summary>
        /// Creates a new user in the database.
        /// Returns an AuthResult with an error if not successful.
        /// </summary>
        static AuthResult CreateUser(string email, string name, string pw, string provider)
        {
            // check that the user doesn't exist yet
            var ctx = new UsersEntities();
            var user = ctx.Users.FirstOrDefault(u => u.email == email);
            if (user != null)
            {
                return new AuthResult(AuthError.EmailTaken);
            }

            // validate data
            if (!IsValidEmail(email))
            {
                return new AuthResult(AuthError.InvalidEmail);
            }
            if (!IsValidName(name))
            {
                return new AuthResult(AuthError.InvalidName);
            }
            if (!IsValidPassword(pw) && string.IsNullOrEmpty(provider))
            {
                return new AuthResult(AuthError.InvalidPassword);
            }

            // create new user
            user = new User();
            user.name = name;
            user.email = email;
            user.password = MakePasswordHash(email, pw, null);
            user.provider = provider;
            user.created = DateTime.Now;
            user.lastaccess = user.created;
            ctx.Users.Add(user);
            ctx.SaveChanges();

            // check that hash is working OK
            Debug.Assert(CheckPasswordHash(email, pw, user.password));

            // all done
            return new AuthResult(user);
        }
        /// <summary>
        /// Updates the user cookie.
        /// If an email is provided, it is stored with a hash in the cookie.
        /// The cookie is optionally kept for 30 days.
        /// If an email is not provided, the cookie is cleared.
        /// </summary>
        static void UpdateUserCookie(HttpContext context, AuthResult result, string keep)
        {
            var cookie = new HttpCookie("user");
            var user = result != null ? result.user : null;
            if (user != null)
            {
                cookie.Value = Encryptor.Encrypt(user.email);
                cookie.Expires = string.Equals(keep, "true", StringComparison.OrdinalIgnoreCase)
                    ? DateTime.Now.AddDays(+COOKIE_AGE_IN_DAYS) // expires in 30 days
                    : DateTime.MinValue; // expires with session
            }
            else
            {
                cookie.Expires = DateTime.Now.AddDays(-1); // remove cookie
            }
            context.Response.Cookies.Add(cookie);
            context.User = user;
            System.Threading.Thread.CurrentPrincipal = user;
        }
        /// <summary>
        /// Returns the email stored in the cookie, or string.Empty if the 
        /// cookie is empty or invalid.
        /// </summary>
        static string ParseUserCookie(HttpContext context)
        {
            var cookie = context.Request.Cookies["user"];
            if (cookie != null && cookie.Value != null)
            {
                try
                {
                    return Encryptor.Decrypt(cookie.Value);
                }
                catch { }
            }
            return string.Empty;
        }
        /// <summary>
        /// Checks that a string contains a valid e-mail address.
        /// </summary>
        static bool IsValidEmail(string email)
        {
            const string RX_EMAIL = @"^[_a-z0-9._%+-]+(\.[_a-z0-9.-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})?$";
            return 
                !string.IsNullOrEmpty(email) && email.Length < 50 &&
                Regex.IsMatch(email, RX_EMAIL, RegexOptions.IgnoreCase);
        }
        /// <summary>
        /// Checks that a string contains a valid user name.
        /// </summary>
        static bool IsValidName(string name)
        {
            return name != null && name.Length >= MIN_NAME_LENGTH;
        }
        /// <summary>
        /// Checks that a string contains a valid user password.
        /// </summary>
        static bool IsValidPassword(string password)
        {
            return password != null && password.Length >= MIN_PASSWORD_LENGTH;
        }
        /// <summary>
        /// Creates a random string with a specified size.
        /// </summary>
        static string MakeRandomString(int count)
        {
            var rnd = new Random();
            var sb = new StringBuilder(count);
            for (var i = 0; sb.Length < count; i++)
            {
                var c = (char)rnd.Next((int)'0', (int)'z');
                if (char.IsLetterOrDigit(c))
                {
                    sb.Append(c);
                }
            }
            return sb.ToString();
        }
        /// <summary>
        /// Creates a hash for a password.
        /// This is used to avoid storing the actual passwords in the database.
        /// For details see
        /// https://www.udacity.com/course/viewer#!/c-cs253/l-48666069/e-48011983/m-48720143
        /// </summary>
        static string MakePasswordHash(string email, string password, string salt)
        {
            if (salt == null)
            {
                salt = MakeRandomString(5);
            }
            var data = email.ToLower() + password + salt;
            var hmac = new HMACSHA256(Encoding.ASCII.GetBytes(salt));
            var hash = hmac.ComputeHash(Encoding.ASCII.GetBytes(data));
            return Convert.ToBase64String(hash) + "," + salt;
        }
        /// <summary>
        /// Checks a given password against a password hash stored in the database.
        /// For details see
        /// https://www.udacity.com/course/viewer#!/c-cs253/l-48666069/e-48011983/m-48720143
        /// </summary>
        static bool CheckPasswordHash(string email, string password, string hash)
        {
            var index = hash.LastIndexOf(',');
            if (index > -1)
            {
                var salt = hash.Substring(index + 1);
                return MakePasswordHash(email, password, salt) == hash;
            }
            return false;
        }
        /// <summary>
        /// Notifies the user that his password has been reset.
        /// </summary>
        static bool NotifyUser(string email, string name, string password)
        {
#if false //DEBUG
            Debug.Assert(false, "not sending mail in debug mode...");
            System.Threading.Thread.Sleep(2000);
            return true;
#endif
            // get mail information from config file
            // this information is stored in the web.config file as follows:
            //<!-- settings used to send e-mail notifications to users -->
            //<appSettings>
            //  <add key="SenderAddress" value="senderApp@hotmail.com" />
            //  <add key="SenderName" value="SenderApp" />
            //  <add key="SenderId" value="password" />
            //  <add key="BccList" value="senderApp@hotmail.com,me@hotmail.com" />
            //  <add key="MsgTitle" value="SenderApp Password Reset" />
            //  <add key="MsgBody" value="Dear {1}, your SenderApp password has been reset to {0}."/>
            //</appSettings>
            var wc = WebConfigurationManager.AppSettings;
            var senderAddress = wc["SenderAddress"];
            var senderId = wc["SenderId"];
            var smtpClient = wc["SmtpClient"];
            var senderName = wc["SenderName"];
            var bccList = wc["BccList"];
            var msgTitle = wc["MsgTitle"];
            var msgBody = wc["MsgBody"].Replace("\\r", "\r").Replace("\\n", "\n");

            // check that the email configuration is valid
            if (string.IsNullOrEmpty(smtpClient) || string.IsNullOrEmpty(msgTitle) || string.IsNullOrEmpty(msgBody) ||
                !IsValidEmail(senderAddress) || string.IsNullOrEmpty(senderId) || string.IsNullOrEmpty(senderName))
            {
                return false;
            }

            // check that the parameters are valid
            if (!IsValidEmail(email) || !IsValidName(name) || !IsValidPassword(password))
            {
                return false;
            }

            // create message
            var mm = new MailMessage();
            mm.From = new MailAddress(senderAddress, senderName);
            mm.To.Add(new MailAddress(email));
            mm.Subject = msgTitle;
            mm.Body = string.Format(msgBody, password, name);
            mm.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
            if (!string.IsNullOrEmpty(bccList))
            {
                foreach (var s in bccList.Split(','))
                {
                    mm.Bcc.Add(new MailAddress(s));
                }
            }

            // send message via live ssl
            try
            {
                var ss = new SmtpClient(smtpClient);
                //ss.EnableSsl = true;
                ss.Timeout = 10000;
                ss.DeliveryMethod = SmtpDeliveryMethod.Network;
                ss.UseDefaultCredentials = false;
                ss.Credentials = new NetworkCredential(senderAddress, senderId);
                ss.Send(mm);
            }
            catch (Exception x)
            {
                System.Diagnostics.Debug.WriteLine(x.Message);
                return false;
            }

            // message sent
            return true;
        }

        #endregion

        //-------------------------------------------------------------------------------
        #region ** return values

        /// <summary>
        /// Class used to return results as JSON objects.
        /// </summary>
        class AuthResult
        {
            public AuthUser user { get; set; }
            public int error { get; set; }

            public AuthResult(AuthError err)
            {
                error = (int)err;
            }
            public AuthResult(User u)
            {
                user = new AuthUser(u);
            }
        }
        /// <summary>
        /// Class used to return user info as JSON objects.
        /// The class implements IPrincipal so it can be assigned to HttpContext.User.
        /// </summary>
        class AuthUser : 
            IPrincipal,
            IIdentity
        {
            public string name { get; set; }
            public string email { get; set; }
            public int role { get; set; }
            public string data { get; set; }

            public AuthUser(User user)
            {
                if (user != null)
                {
                    name = user.name;
                    email = user.email;
                    role = user.role;
                    data = user.data;
                }
            }

            // ** IPrincipal

            IIdentity IPrincipal.Identity
            {
                get { return (IIdentity)this; }
            }
            bool IPrincipal.IsInRole(string role)
            {
                AuthRoles ar;
                return Enum.TryParse<AuthRoles>(role, true, out ar)
                    ? (this.role & (int)ar) != 0
                    : false;
            }

            // ** IIdentity
            string IIdentity.AuthenticationType
            {
                get { return "forms"; }
            }
            bool IIdentity.IsAuthenticated
            {
                get { return !string.IsNullOrEmpty(this.email); }
            }
            string IIdentity.Name
            {
                get { return this.name; }
            }
        }
        #endregion
    }

    /// <summary>
    /// Utility class to encrypt/decrypt strings.
    /// </summary>
    public class Encryptor
    {
        static string _key = "rtnmdsfa;slkew243";
        static byte[] _salt = UTF8Encoding.UTF8.GetBytes("^%$asdd@#$@#$$");
        public static string Encrypt(string text)
        {
            var data = UTF8Encoding.UTF8.GetBytes(text);
            var csp = GetCSP();
            data = csp.CreateEncryptor().TransformFinalBlock(data, 0, data.Length);
            csp.Clear();
            return Convert.ToBase64String(data, 0, data.Length);
        }
        public static string Decrypt(string text)
        {
            var data = Convert.FromBase64String(text);
            var csp = GetCSP();
            data = csp.CreateDecryptor().TransformFinalBlock(data, 0, data.Length);
            csp.Clear();
            return UTF8Encoding.UTF8.GetString(data);
        }
        static AesCryptoServiceProvider GetCSP()
        {
            var csp = new AesCryptoServiceProvider();
            var rfc = new Rfc2898DeriveBytes(_key, _salt);
            csp.Key = rfc.GetBytes(csp.KeySize / 8);
            csp.IV = rfc.GetBytes(csp.BlockSize / 8);
            return csp;
        }
    }
}