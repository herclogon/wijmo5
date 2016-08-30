using OData.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;

namespace OData.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using OData;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Supplier>("Suppliers");
    builder.EntitySet<Product>("Products"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SuppliersController : ODataController
    {
        private NorthwindEntitiesOData db = new NorthwindEntitiesOData();

        // GET: odata/Suppliers
        [EnableQuery]
        public IQueryable<Supplier> GetSuppliers()
        {
            return db.Suppliers;
        }

        // GET: odata/Suppliers(5)
        [EnableQuery]
        public SingleResult<Supplier> GetSupplier([FromODataUri] int key)
        {
            return SingleResult.Create(db.Suppliers.Where(supplier => supplier.Supplier_ID == key));
        }

        // PUT: odata/Suppliers(5)
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Delta<Supplier> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Supplier supplier = await db.Suppliers.FindAsync(key);
            if (supplier == null)
            {
                return NotFound();
            }

            patch.Put(supplier);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupplierExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(supplier);
        }

        // POST: odata/Suppliers
        public async Task<IHttpActionResult> Post(Supplier supplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Suppliers.Add(supplier);
            await db.SaveChangesAsync();

            return Created(supplier);
        }

        // PATCH: odata/Suppliers(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<Supplier> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Supplier supplier = await db.Suppliers.FindAsync(key);
            if (supplier == null)
            {
                return NotFound();
            }

            patch.Patch(supplier);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupplierExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(supplier);
        }

        // DELETE: odata/Suppliers(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            Supplier supplier = await db.Suppliers.FindAsync(key);
            if (supplier == null)
            {
                return NotFound();
            }

            db.Suppliers.Remove(supplier);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Suppliers(5)/Products
        [EnableQuery]
        public IQueryable<Product> GetProducts([FromODataUri] int key)
        {
            return db.Suppliers.Where(m => m.Supplier_ID == key).SelectMany(m => m.Products);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SupplierExists(int key)
        {
            return db.Suppliers.Count(e => e.Supplier_ID == key) > 0;
        }
    }
}
