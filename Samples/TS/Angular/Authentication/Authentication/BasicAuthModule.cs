using System.Web;

namespace Auth
{
    // Authentication module specified in Web.config:
    //<configuration>
    //  <system.webServer>
    //    <modules runAllManagedModulesForAllRequests="true">
    //      <add name="BasicAuthModule" type="OData.BasicAuthModule" />
    //    </modules>
    public class BasicAuthModule : IHttpModule
    {
        public void Init(HttpApplication app)
        {
            // require authentication for all requests except:
            // GET requests (allow everyone to read the data)
            // AUTH requests (allow people to log in/out)
            app.AuthenticateRequest += (s, e) =>
            {
                if (app.Request.HttpMethod != "GET" && // everyone can read
                    app.Context.Request.Path.ToLower() != "/auth.ashx") // everyone can authenticate
                {
                    var user = Auth.GetCurrentUser(app.Context);
                    app.Context.User = user;
                    System.Threading.Thread.CurrentPrincipal = user;
                    if (user == null || !user.Identity.IsAuthenticated)
                    {
                        CreateNotAuthorizedResponse(app, 401, 1, "User not authenticated.");
                        app.CompleteRequest();
                    }
                }
            };
        }
        private static void CreateNotAuthorizedResponse(HttpApplication app, int statusCode, int subCode, string description)
        {
            var rsp = app.Context.Response;
            rsp.StatusCode = statusCode;
            rsp.SubStatusCode = subCode;
            rsp.StatusDescription = description;
            rsp.AppendHeader("WWW-Authenticate", "Basic");
        }
        public void Dispose()
        {
        }
    }
}