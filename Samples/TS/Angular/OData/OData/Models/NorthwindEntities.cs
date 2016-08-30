using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace OData.Models
{
    public class NorthwindEntitiesOData : DbContext
    {
        public NorthwindEntitiesOData()
            : base("name=NorthwindEntities")
        {
            // ensure database file is not read-only
            // (in case someone forgets to check it out of source control)
            lock (typeof(NorthwindEntitiesOData))
            {
                var path = HttpContext.Current.Request.PhysicalApplicationPath;
                path = System.IO.Path.Combine(path, "App_Data");
                foreach (var fn in System.IO.Directory.GetFiles(path, "*.sdf"))
                {
                    var fi = new System.IO.FileInfo(fn);
                    fi.IsReadOnly = false;
                }
            }
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Customer> Customers { get; set; } 
        public DbSet<Order> Orders { get; set; }
        public DbSet<Shipper> Shippers { get; set; }
        public DbSet<Order_Detail> Order_Details { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasOptional(p => p.Order_Details)
                .WithMany()
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<Order>()
                .HasOptional(o => o.Order_Details)
                .WithMany()
                .WillCascadeOnDelete(true);

            base.OnModelCreating(modelBuilder);
        }
    }
}