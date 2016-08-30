using System.Web;
using System.Web.Http;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;

namespace OData
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Category>("Categories");
            builder.EntitySet<Employee>("Employees");
            builder.EntitySet<Product>("Products");
            builder.EntitySet<Supplier>("Suppliers");
            builder.EntitySet<Customer>("Customers");
            builder.EntitySet<Order>("Orders");
            builder.EntitySet<Shipper>("Shippers");
            builder.EntitySet<Order_Detail>("Order_Details").EntityType.HasKey(od => od.Order_ID);
            config.MapODataServiceRoute(
                routeName: "ODataRoute",
                routePrefix: "MyNorthWind", //"odata",
                model: builder.GetEdmModel());
        }
    }
}
