using OData.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;
using System.Web.OData.Routing;

namespace OData.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using OData;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Order_Detail>("Order_Details");
    builder.EntitySet<Product>("Products"); 
    builder.EntitySet<Order>("Orders"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class Order_DetailsController : ODataController
    {
        private NorthwindEntitiesOData db = new NorthwindEntitiesOData();

        // GET: odata/Order_Details
        [EnableQuery]
        public IQueryable<Order_Detail> GetOrder_Details()
        {
            return db.Order_Details;
        }

        //// GET: odata/Order_Details(5)
        //[EnableQuery]
        //public IQueryable<Order_Detail> GetOrder_Details([FromODataUri] int key)
        //{
        //    return db.Order_Details.Where(od => od.Order_ID == key);
        //}

        // GET: odata/Order_Details(5, 5)
        [ODataRoute("Order_Details(Order_ID={Order_ID}, Product_ID={Product_ID})")]
        [EnableQuery]
        public SingleResult<Order_Detail> GetOrder_Details([FromODataUri] int Order_ID, [FromODataUri] int Product_ID)
        {
            return SingleResult.Create(db.Order_Details.Where(order_Detail => order_Detail.Order_ID == Order_ID && order_Detail.Product_ID == Product_ID));
        }

        // PUT: odata/Order_Details(5)
        [ODataRoute("Order_Details(Order_ID={Order_ID}, Product_ID={Product_ID})")]
        public async Task<IHttpActionResult> Put([FromODataUri] int Order_ID, [FromODataUri] int Product_ID, Delta<Order_Detail> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Order_Detail order_Detail = await db.Order_Details.FindAsync(Order_ID, Product_ID);
            if (order_Detail == null)
            {
                return NotFound();
            }

            patch.Put(order_Detail);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Order_DetailExists(Order_ID, Product_ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(order_Detail);
        }

        // POST: odata/Order_Details
        public async Task<IHttpActionResult> Post(Order_Detail order_Detail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Order_Details.Add(order_Detail);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Order_DetailExists(order_Detail.Order_ID, order_Detail.Product_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(order_Detail);
        }

        // PATCH: odata/Order_Details(5)
        [AcceptVerbs("PATCH", "MERGE")]
        [ODataRoute("Order_Details(Order_ID={Order_ID}, Product_ID={Product_ID})")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int Order_ID, [FromODataUri] int Product_ID, Delta<Order_Detail> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Order_Detail order_Detail = await db.Order_Details.FindAsync(Order_ID, Product_ID);
            if (order_Detail == null)
            {
                return NotFound();
            }

            patch.Patch(order_Detail);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Order_DetailExists(Order_ID, Product_ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(order_Detail);
        }

        // DELETE: odata/Order_Details(5)
        [ODataRoute("Order_Details(Order_ID={Order_ID}, Product_ID={Product_ID})")]
        public async Task<IHttpActionResult> Delete([FromODataUri] int Order_ID, [FromODataUri] int Product_ID)
        {
            Order_Detail order_Detail = await db.Order_Details.FindAsync(Order_ID, Product_ID);
            if (order_Detail == null)
            {
                return NotFound();
            }

            db.Order_Details.Remove(order_Detail);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Order_Details(5)/Product
        [EnableQuery]
        public SingleResult<Product> GetProduct([FromODataUri] int key)
        {
            return SingleResult.Create(db.Order_Details.Where(m => m.Order_ID == key).Select(m => m.Product));
        }

        // GET: odata/Order_Details(5)/Order
        [EnableQuery]
        public SingleResult<Order> GetOrder([FromODataUri] int key)
        {
            return SingleResult.Create(db.Order_Details.Where(m => m.Order_ID == key).Select(m => m.Order));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Order_DetailExists(int Order_ID, int Product_ID)
        {
            return db.Order_Details.Count(e => e.Order_ID == Order_ID && e.Product_ID == Product_ID) > 0;
        }
    }
}
