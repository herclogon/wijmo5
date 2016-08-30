using System;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace SampleExplorer
{
    /// <summary>
    /// Summary description for SampleFileTree
    /// </summary>
    [
        WebService(Namespace = "http://tempuri.org/"),
        WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1),
        ScriptService // callable from script
    ]
    public class SampleFileTree : WebService
    {
        private string Samples;

        public SampleFileTree()
        {
            Samples = Server.MapPath("~") + "..\\..\\..\\";
            Samples = Path.GetFullPath(Samples);
        }

        // gets the content of a file
        [
            WebMethod(
                Description = "Gets the contents of a file.",
                MessageName = "GetFileByPath",
                CacheDuration = 172800) // 2 days
        ]
        public void GetFileByPath(string path)
        {
            var result = string.Empty;

            // check whether the file is in the Samples folder
            if (path.IndexOf(Samples, comparisonType: StringComparison.Ordinal) == 0)
            {
                // replace '..' so user can't start with the path of Samples and go up
                path = path.Replace("..", string.Empty);
                try
                {
                    var content = File.ReadAllText(path, Encoding.UTF8);
                    result = htmlEncode(content);
                }
                catch (Exception exp)
                {
                    result = exp.Message;
                }
            }
            else
            {
                result = "Invalid directory \"" + path + "\".";
            }

            // save result
            //this.Context.Response.ContentType = "application/json; charset=utf-8";
            this.Context.Response.Write(result);
        }

        // gets the project tree for a sample
        [
            WebMethod(
                Description = "Gets a JSON object containing the file tree for a sample/category.",
                MessageName = "GetFileTreeFromSample",
                CacheDuration = 172800) // 2 days
        ]
        public void GetFileTreeFromSample(string dirTitle, string category)
        {
            // build path
            var path = Samples + "\\" + category + "\\" + dirTitle;
            var result = RecursiveDirSearchFrom(path, string.Empty);

            // remove empty objects that may affect the parsing of the JSON
            // in the future clean the recursion to not generate messy JSONs
            while (result.LastIndexOf("{},") >= 0 ||
                  result.LastIndexOf(",]") >= 0 ||
                  result.LastIndexOf(",}") >= 0 ||
                  result.LastIndexOf("{}") >= 0)
            {
                result = result.Replace("{},", string.Empty);
                result = result.Replace(",]", "]");
                result = result.Replace(",}", "}");
                result = result.Replace("{}", string.Empty);
            }

            // return JSON result
            this.Context.Response.ContentType = "application/json; charset=utf-8";
            this.Context.Response.Write(result);
        }

        string htmlEncode(string str)
        {
            return str
                .Replace("&", "&amp;")
                .Replace("'", "&apos;")
                .Replace("\"", "&quot;")
                .Replace("<", "&lt;")
                .Replace(">", "&gt;")
                .Replace("\\", "\\\\");
        }

        bool excludePath(string path)
        {
            var exclude = false;

            if (path.EndsWith(@"\.vs") || path.EndsWith(@"\node_modules") || path.EndsWith(@"\bin") || path.EndsWith(@"\obj") || path.EndsWith(@"\Properties") || path.Contains("readme-guids.txt") || path.Contains("screenshot.png") || path.Contains(".suo") || path.Contains(".sln") || path.Contains(".csproj"))
            {
                exclude = true;
            }

            return exclude;
        }

        string RecursiveDirSearchFrom(string path, string tree)
        {
            tree += "{";

            if (excludePath(path))
            {
                //this path should be excluded
                return tree + "}";
            }
            try
            {
                var attr = File.GetAttributes(path);
                if ((attr & FileAttributes.Directory) == FileAttributes.Directory || Directory.Exists(path))
                {
                    tree += "\"type\" : \"dir\", \"DirTitle\" : \"" + Path.GetFileName(path) + "\", \"children\" : [";
                    foreach (string f in ((Directory.GetDirectories(path)).Union(Directory.GetFiles(path))).ToArray())
                    {
                        tree = this.RecursiveDirSearchFrom(f, tree) + ",";
                    }
                    tree = tree.TrimEnd(',');
                    tree += "]";
                }
                else // it's a file! (hopefully, can still be a symlink?)
                {
                    var escapedPath = htmlEncode(path);
                    string file;
                    try
                    {
                        file = File.ReadAllText(path, Encoding.UTF8);
                        if (file.Length > 300000)
                        {
                            // file is larger than the json can handle
                        }
                        else
                        {
                            tree += "\"type\" : \"file\", \"DirTitle\" : \"" + Path.GetFileName(path) + "\", \"path\" : \"" +
                            escapedPath + "\"";
                        }
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                }
                return tree + "}";
            }
            catch (FileNotFoundException)
            {
                return tree + "FILE_NOT_FOUND" + "}";
            }
            catch (IOException exp)
            {
                return tree + exp.Message + "}";
            }
        }
    }
}
