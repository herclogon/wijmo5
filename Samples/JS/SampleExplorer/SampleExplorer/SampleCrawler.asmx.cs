using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.Caching;

namespace SampleExplorer // << NOTE: this must match the full class name in the ashx file!
{
    /// <summary>
    /// SampleCrawler returns the following information:
    /// [{
    /// "name":
    ///     from readme.txt
    ///     or parsed from camelCase to string with spaces from project folder name if no readme.txt
    /// "dirtitle":
    ///     name of the project directory the sample is in
    /// "title":
    ///     from readme.txt
    ///     null if no readme.txt
    /// "category":
    ///     from name of directory containing the project folder
    /// "address":
    ///     full path of project folder
    /// "description":
    ///     from readme.txt
    ///     null if no readme.txt
    /// "screenshot":
    ///     full path of screenshot.png on the project folder
    ///     null if no screenshot.png found
    /// "error":
    ///     NO_README if readme.txt is not found
    ///     null if no error
    /// }, ...]
    /// </summary>
    [
        WebService(Namespace = "http://tempuri.org/"),
        WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1),
        ScriptService // callable from script
    ]
    public class SampleCrawler : WebService
    {
        List<Sample> _sampleList = new List<Sample>();
        string _path;
        string _logFilePath;
        private string _url = "http://demos.wijmo.com/5/";

        // constructor
        public SampleCrawler()
        {

            // get path without "../"s in it.
            _path = Server.MapPath("~") + "..\\..\\..\\";
            _path = Path.GetFullPath(_path);
            _logFilePath = Server.MapPath("~") + "\\log.txt";

            try
            {
                //Create log file if it doesnt exist
                if (!File.Exists(_logFilePath))
                {
                    File.Create(_logFilePath);
                }
                else
                {
                    //empty log file if it is too big (128MB)
                    FileInfo fInfo = new FileInfo(_logFilePath);
                    if (fInfo.Length > 134217728)
                    {
                        File.WriteAllText(fInfo.FullName, "");
                    }
                }
            }
            catch (Exception x)
            {

                throw x;
            }

        }

        public void LogInformation(string logInfo)
        {
            try
            {
                using (StreamWriter sw = new StreamWriter(_logFilePath, true))
                {
                    sw.WriteLineAsync(DateTime.Now.ToString() + ": " + logInfo);
                }
            }
            catch (Exception x)
            {
                throw x;
            }
        }

        // crawls the samples folder and returns a JSON string with all their info
        [
            WebMethod(
                Description = "Crawls the samples folder to get their info.",
                MessageName = "Crawl",
                CacheDuration = 172800) // 2 days
        ]
        public void Crawl()
        {

            // use our own cache in case the user refreshes the page
            // with ctrl+refresh
            var key = "sampleList" + _path;
            var list = HttpRuntime.Cache.Get(key) as List<Sample>;
            if (list != null && list.Count > 0)
            {
                foreach (var sample in list)
                {
                    _sampleList.Add(sample);
                }
            }
            else
            {
                if (list != null && list.Count == 0)
                {
                    LogInformation("Cache Exists but is empty");
                }
                // not in cache (or cache empty, get it now
                CrawlDirs(_path, string.Empty);
                if (_sampleList.Count > 0)
                {
                    // and store in cache
                    HttpRuntime.Cache.Add(
                        key,
                        _sampleList,
                        null,
                        DateTime.Now.AddDays(2),
                        Cache.NoSlidingExpiration,
                        CacheItemPriority.High,
                        null);
                }

            }

            // done, return the result
            this.Context.Response.ContentType = "application/json; charset=utf-8";
            var serialized = JsonSerializer<List<Sample>>.Serialize(_sampleList);
            this.Context.Response.Write(serialized);
        }

        // Adds paragraphs to the description so it's ready for displaying on the web
        string DescriptionToOutput(string desc)
        {
            // separate pre/code blocks from other text
            // in case the author added a <pre> without a blank line before it
            desc = Regex.Replace(desc,
                "<(?:pre|code)>(.*?)</(?:pre|code)>",
                "\r\n\r\n$0\r\n\r\n",
                RegexOptions.Singleline | RegexOptions.IgnoreCase);

            // html-encode content of pre/code blocks
            desc = Regex.Replace(desc,
                "<(?:pre|code)>(.*?)</(?:pre|code)>",
                (m) =>
                {
                    // encode Html
                    var content = m.Groups[1].Value;
                    content = m.Value.Replace(content, HttpUtility.HtmlEncode(content));

                    // remove leading spaces (but preserve indentation)
                    for (var count = 0; count == 0;)
                    {
                        count = Regex.Matches(content, @"^[^\s<]", RegexOptions.Multiline).Count;
                        if (count != 0) break;
                        content = Regex.Replace(content, @"(^)\s", "$1", RegexOptions.Multiline);
                    }

                    // done
                    return content;
                },
                RegexOptions.Singleline | RegexOptions.IgnoreCase);

            // convert urls to links (after html-encoding)
            desc = Regex.Replace(desc,
                @"\b((?:(?:https?|ftp|file)://|www\.|ftp\.)[-A-Z0-9+&@#/%=~_|$?!:,.]*[A-Z0-9+&@#/%=~_|$])",
                "<a href=\"$1\" title=\"Click to open in a new window\" target=\"_blank\">$1</a>",
                RegexOptions.IgnoreCase);

            // break up input into paragraphs
            var sb = new StringBuilder();
            var chunks = Regex.Split(desc, "\r\n\r\n");
            for (var i = 0; i < chunks.Length; i++)
            {
                var p = chunks[i].Trim();
                if (p.Length > 0)
                {
                    // handle pre-formatted blocks
                    if (p.StartsWith("<pre>", StringComparison.OrdinalIgnoreCase) ||
                        p.StartsWith("<code>", StringComparison.OrdinalIgnoreCase))
                    {
                        sb.AppendFormat("\r\n{0}\r\n", p);
                    }
                    else
                    {
                        // normal paragraph
                        sb.AppendFormat("<p>{0}</p>\r\n", p);
                    }
                }
            }

            // all done
            return sb.ToString();
        }

        /// <summary>
        ///
        /// Recursively locates all samples that exist inside the desired path,
        /// populates the list _sampleList with the results.
        ///
        /// The recursion returns if the dir contains a file called exclude_from_samples
        /// or
        /// the dir is called
        ///     SampleExplorer
        ///     or
        ///     SampleCodeExplorer
        ///     or
        ///     WijmoHelp
        ///
        /// The recursion considers a project folder one that contains a file with
        ///     the extension .sln
        ///
        /// s.DirTitle contains the name of the directory the sample is in,
        ///     useful to identify samples uniquely without spaces or special chars
        ///
        /// s.Category is the name of the framework the sample is implemented in
        ///     value gotten from the name of the folder the sample project folder is in,
        ///     e.g. Angular or Knockout
        ///
        /// s.Screenshot is the address of the screenshot file for the sample in the server,
        ///     if no file is found in the sample's project folder an empty string is passed.
        ///
        /// s.Name
        /// s.Title
        /// s.Description
        ///     are loaded from readme.txt,
        ///     if readme.txt
        ///         doesn't pass isValidReadme
        ///         or
        ///         doesn't exist
        ///             the sample is not added
        ///
        /// s.Address contains the address of the executable sample in C1s server,
        ///     if the address is not reachable at the moment an empty string is used instead.
        ///
        /// </summary>
        void CrawlDirs(string fromPath, string comingFrom)
        {
            try
            {
                if (Directory.GetFiles(fromPath).Any(f => f.Contains("exclude_from_samples"))) return;
                if (fromPath.Contains("SampleExplorer")) return;
                if (fromPath.Contains("EmptyWijmo")) return;
                if (fromPath.Contains("WijmoHelp")) return;

                foreach (string f in Directory.GetFiles(fromPath))
                {
                    if (f.Contains(".sln"))
                    {
                        var s = new Sample();
                        var split1 = f.Split('\\');
                        s.Category = comingFrom; // this stores the last folder name the recursion was at, so it's easier to know which category the current demo belongs to

                        try
                        {
                            s.DirTitle = split1[split1.Length - 2]; // moved these 3 lines before the readAllLines because if an exception is called sample will lack a dirTitle
                            if (File.Exists(fromPath + "\\" + split1[split1.Length - 2] + "\\screenshot.png"))
                            {
                                s.Screenshot = _url + s.Category + "/" + s.DirTitle + "/" + s.DirTitle + "/screenshot.png";
                            }
                            else // no screenshot
                            {
                                s.Screenshot = string.Empty;
                                LogInformation("Missing Screenshot - " + fromPath);
                            }

                            var path = String.Join("\\", split1.ToList<String>().GetRange(0, split1.Length - 2).ToArray()) + "\\" + split1[split1.Length - 2] + "\\" + split1[split1.Length - 2] + "\\readme.txt";
                            string readmeTxt;
                            try
                            {
                                readmeTxt = File.ReadAllText(path, Encoding.UTF8);
                            }
                            catch (Exception x)
                            {
                                throw x;
                            }

                            var m = Regex.Match(readmeTxt,
                                @"^([^\r\n]+)\r\n" + // name
                                @"[\-]+\r\n" + // separator
                                @"([^\r\n]+)\r\n" + // title
                                @"(.+)$", // description
                                RegexOptions.Singleline);
                            if (m.Success)
                            {
                                s.Name = m.Groups[1].Value;
                                s.Title = m.Groups[2].Value;
                                s.Description = DescriptionToOutput(m.Groups[3].Value);
                            }
                            else // invalid readme.txt
                            {

                                LogInformation("Invalid Readme - " + fromPath);
                                return; // if readme.txt is invalid according to the Regex, don't include the sample.
                            }

                        }
                        catch (Exception x)
                        {
                            // s.Error += "NO_README";
                            // s.Name = Regex.Replace(split1[split1.Length - 2], "(?<a>(?<!^)((?:[A-Z][a-z])|(?:(?<!^[A-Z]+)[A-Z0-9]+(?:(?=[A-Z][a-z])|$))|(?:[0-9]+)))", " ${a}"); // from CamelCase to Spaces (name taken from project folder name)
                            //throw x;
                            LogInformation("Issue Crawling Directories - " + fromPath);
                            return;
                        }

                        s.Address = _url + s.Category + "/" + s.DirTitle + "/" + s.DirTitle + "/" + (s.Category == "Ionic" ? "www" : string.Empty);
                        //WebRequest request;
                        //HttpWebResponse response;
                        //try
                        //{
                        //    request = WebRequest.Create(s.Address);
                        //    response = (HttpWebResponse)request.GetResponse();
                        //    if (response == null || response.StatusCode != HttpStatusCode.OK) // if the link is down, erase it.
                        //    {
                        //        LogInformation("Sample Offline - " + s.Address + " - " + fromPath);
                        //        s.Address = string.Empty;

                        //    }
                        //    response.Close();
                            _sampleList.Add(s);
                        //}
                        //catch (Exception x)
                        //{
                        //    return;
                        //}
                        return; // when one file is found inside the directory it's enough to say it's a project folder and return to crawling (let's try not to leave files hanging around)
                    }
                }

                foreach (string d in Directory.GetDirectories(fromPath))
                {
                    var cf = fromPath.Split('\\');
                    var dirname = cf[cf.Length - 1];
                    this.CrawlDirs(d, dirname);
                }
            }
            catch (System.Exception x)
            {
                //var s = new Sample();
                //s.Error += x.Message;
                LogInformation(x.Message);
                //throw x;
                // _sampleList.Add(s); // not adding samples with errors anymore, chris!
            }
        }
    }

    public static class JsonSerializer<TType> where TType : class
    {
        /// <summary>
        /// Serializes an object to JSON
        /// </summary>
        public static string Serialize(TType instance)
        {
            var serializer = new DataContractJsonSerializer(typeof(TType));
            using (var stream = new MemoryStream())
            {
                serializer.WriteObject(stream, instance);
                return Encoding.Default.GetString(stream.ToArray());
            }
        }

        /// <summary>
        /// DeSerializes an object from JSON
        /// </summary>
        public static TType DeSerialize(string json)
        {
            using (var stream = new MemoryStream(Encoding.Default.GetBytes(json)))
            {
                var serializer = new DataContractJsonSerializer(typeof(TType));
                return serializer.ReadObject(stream) as TType;
            }
        }
    }

    /// <summary>
    /// This is a Sample node in the JSON response to the client,
    /// [Deprecated:] Sample.error contains 'NO_README' when no file was found on the Sample folder with information about it
    /// when this is the case the Sample name is taken from the project folder name, the camelCase project name is converted to a string with spaces.
    /// </summary>
    [DataContract]
    public class Sample
    {
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public string DirTitle { get; set; }
        [DataMember]
        public string Title { get; set; }
        [DataMember]
        public string Category { get; set; }
        [DataMember]
        public string Address { get; set; }
        [DataMember]
        public string Description { get; set; }
        [DataMember]
        public string Screenshot { get; set; }
        [DataMember]
        public string Error { get; set; }
    }
}