using Breeze.ContextProvider.NH;
using Models.NorthwindIB.NH;

namespace WijmoNxtNorthBreeze.Controllers
{
    public class NorthwindContext : NHContext
    {
        // ensure database file is not read-only
        // (in case someone forgets to check it out of source control)
        static NorthwindContext()
        {
            lock (typeof(NorthwindContext))
            {
                var path = System.Web.HttpContext.Current.Request.PhysicalApplicationPath;
                path = System.IO.Path.Combine(path, "App_Data");
                foreach (var fn in System.IO.Directory.GetFiles(path, "*.sdf"))
                {
                    var fi = new System.IO.FileInfo(fn);
                    fi.IsReadOnly = false;
                }
            }
        }

        public NorthwindContext() : base(NHConfig.OpenSession(), NHConfig.Configuration) { }

        public NorthwindContext Context
        {
            get { return this; }
        }
        public NhQueryableInclude<Category> Categories
        {
            get { return GetQuery<Category>(); }
        }
        public NhQueryableInclude<Customer> Customers
        {
            get { return GetQuery<Customer>(); }
        }
        public NhQueryableInclude<Employee> Employees
        {
            get { return GetQuery<Employee>(); }
        }
        public NhQueryableInclude<Order> Orders
        {
            get { return GetQuery<Order>(); }
        }
        public NhQueryableInclude<OrderDetail> OrderDetails
        {
            get { return GetQuery<OrderDetail>(); }
        }
        public NhQueryableInclude<Product> Products
        {
            get { return GetQuery<Product>(); }
        }
        public NhQueryableInclude<Region> Regions
        {
            get { return GetQuery<Region>(); }
        }
        public NhQueryableInclude<Role> Roles
        {
            get { return GetQuery<Role>(); }
        }
        public NhQueryableInclude<Supplier> Suppliers
        {
            get { return GetQuery<Supplier>(); }
        }
        public NhQueryableInclude<Territory> Territories
        {
            get { return GetQuery<Territory>(); }
        }
        public NhQueryableInclude<User> Users
        {
            get { return GetQuery<User>(); }
        }

    }
}