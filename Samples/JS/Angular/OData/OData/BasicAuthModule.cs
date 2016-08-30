using System.Web;

namespace OData
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
            // require authentication for OData requests
            app.AuthenticateRequest += (s, e) =>
		{
                // this sample does not include any authentication code, 
                // but in real applications this is where you would check 
                // who the current user is and whether they are authorized to perform
                // the action being requested.
#if false
                var url = app.Context.Request.Path.ToLower();
                if (requestUrl.IndexOf("/odata/") > -1)
			{
                    // TODO: check that the user is authorized, fail if he isn't...
                }
#endif
            };
			}
		public void Dispose()
		{
		}
	}
}