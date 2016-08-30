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
    builder.EntitySet<Customer>("Customers");
    builder.EntitySet<Order>("Orders"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class CustomersController : ODataController
    {
        private NorthwindEntitiesOData db = new NorthwindEntitiesOData();

        // GET: odata/Customers
        [EnableQuery]
        public IQueryable<Customer> GetCustomers()
        {
            return db.Customers;
        }

        // GET: odata/Customers(5)
        [EnableQuery]
        public SingleResult<Customer> GetCustomer([FromODataUri] string key)
        {
            return SingleResult.Create(db.Customers.Where(customer => customer.Customer_ID == key));
        }

        // PUT: odata/Customers(5)
        public async Task<IHttpActionResult> Put([FromODataUri] string key, Delta<Customer> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Customer customer = await db.Customers.FindAsync(key);
            if (customer == null)
            {
                return NotFound();
            }

            patch.Put(customer);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(customer);
        }

        // POST: odata/Customers
        public async Task<IHttpActionResult> Post(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Customers.Add(customer);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CustomerExists(customer.Customer_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(customer);
        }

        // PATCH: odata/Customers(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] string key, Delta<Customer> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Customer customer = await db.Customers.FindAsync(key);
            if (customer == null)
            {
                return NotFound();
            }

            patch.Patch(customer);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(customer);
        }

        // DELETE: odata/Customers(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] string key)
        {
            Customer customer = await db.Customers.FindAsync(key);
            if (customer == null)
            {
                return NotFound();
            }

            db.Customers.Remove(customer);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Customers(5)/Orders
        [EnableQuery]
        public IQueryable<Order> GetOrders([FromODataUri] string key)
        {
            return db.Customers.Where(m => m.Customer_ID == key).SelectMany(m => m.Orders);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerExists(string key)
        {
            return db.Customers.Count(e => e.Customer_ID == key) > 0;
        }
    }
}
