//------------------------------------------------------------------------------
// <copyright file="WebDataService.svc.cs" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Data.Services;
using System.Data.Services.Common;
using System.Linq;
using System.ServiceModel.Web;
using System.Web;

namespace Auth
{
    public class Northwind : DataService<NorthwindEntities>
    {
        // This method is called only once to initialize service-wide policies.
        public static void InitializeService(DataServiceConfiguration config)
        {
#if DEBUG
            config.UseVerboseErrors = true;
#endif

            // ensure database file is not read-only
            // (in case someone forgets to check it out of source control)
            lock (typeof(Northwind))
            {
                var path = HttpContext.Current.Request.PhysicalApplicationPath;
                path = System.IO.Path.Combine(path, "App_Data");
                foreach (var fn in System.IO.Directory.GetFiles(path, "*.sdf"))
                {
                    var fi = new System.IO.FileInfo(fn);
                    fi.IsReadOnly = false;
                }
            }

            // TODO: set rules to indicate which entity sets and service operations are visible, updatable, etc.
            // Examples:
            // config.SetEntitySetAccessRule("MyEntityset", EntitySetRights.AllRead);
            // config.SetServiceOperationAccessRule("MyServiceOperation", ServiceOperationRights.All);
            // Grant only the rights needed to support the client application.
            //config.SetEntitySetAccessRule("Orders", EntitySetRights.AllRead
            //     | EntitySetRights.WriteMerge
            //     | EntitySetRights.WriteReplace);
            //config.SetEntitySetAccessRule("Order_Details", EntitySetRights.AllRead
            //    | EntitySetRights.AllWrite);
            //config.SetEntitySetAccessRule("Customers", EntitySetRights.AllRead);
            config.SetEntitySetAccessRule("*", EntitySetRights.All);
            config.DataServiceBehavior.MaxProtocolVersion = DataServiceProtocolVersion.V3;
        }
    }
}
