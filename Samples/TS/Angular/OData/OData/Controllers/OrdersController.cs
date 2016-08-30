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
    builder.EntitySet<Order>("Orders");
    builder.EntitySet<Customer>("Customers"); 
    builder.EntitySet<Employee>("Employees"); 
    builder.EntitySet<Order_Detail>("Order_Details"); 
    builder.EntitySet<Shipper>("Shippers"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class OrdersController : ODataController
    {
        private NorthwindEntitiesOData db = new NorthwindEntitiesOData();

        // GET: odata/Orders
        [EnableQuery]
        public IQueryable<Order> GetOrders()
        {
            return db.Orders;
        }

        // GET: odata/Orders(5)
        [EnableQuery]
        public SingleResult<Order> GetOrder([FromODataUri] int key)
        {
            return SingleResult.Create(db.Orders.Where(order => order.Order_ID == key));
        }

        // PUT: odata/Orders(5)
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Delta<Order> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Order order = await db.Orders.FindAsync(key);
            if (order == null)
            {
                return NotFound();
            }

            patch.Put(order);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(order);
        }

        // POST: odata/Orders
        public async Task<IHttpActionResult> Post(Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Orders.Add(order);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (OrderExists(order.Order_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(order);
        }

        // PATCH: odata/Orders(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<Order> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Order order = await db.Orders.FindAsync(key);
            if (order == null)
            {
                return NotFound();
            }

            patch.Patch(order);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(order);
        }

        // DELETE: odata/Orders(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            Order order = await db.Orders.FindAsync(key);
            if (order == null)
            {
                return NotFound();
            }

            db.Orders.Remove(order);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Orders(5)/Customer
        [EnableQuery]
        public SingleResult<Customer> GetCustomer([FromODataUri] int key)
        {
            return SingleResult.Create(db.Orders.Where(m => m.Order_ID == key).Select(m => m.Customer));
        }

        // GET: odata/Orders(5)/Employee
        [EnableQuery]
        public SingleResult<Employee> GetEmployee([FromODataUri] int key)
        {
            return SingleResult.Create(db.Orders.Where(m => m.Order_ID == key).Select(m => m.Employee));
        }

        // GET: odata/Orders(5)/Order_Details
        [EnableQuery]
        public IQueryable<Order_Detail> GetOrder_Details([FromODataUri] int key)
        {
            return db.Orders.Where(m => m.Order_ID == key).SelectMany(m => m.Order_Details);
        }

        // GET: odata/Orders(5)/Shipper
        [EnableQuery]
        public SingleResult<Shipper> GetShipper([FromODataUri] int key)
        {
            return SingleResult.Create(db.Orders.Where(m => m.Order_ID == key).Select(m => m.Shipper));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderExists(int key)
        {
            return db.Orders.Count(e => e.Order_ID == key) > 0;
        }
    }
}
