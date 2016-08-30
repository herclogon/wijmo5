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
    builder.EntitySet<Shipper>("Shippers");
    builder.EntitySet<Order>("Orders"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class ShippersController : ODataController
    {
        private NorthwindEntitiesOData db = new NorthwindEntitiesOData();

        // GET: odata/Shippers
        [EnableQuery]
        public IQueryable<Shipper> GetShippers()
        {
            return db.Shippers;
        }

        // GET: odata/Shippers(5)
        [EnableQuery]
        public SingleResult<Shipper> GetShipper([FromODataUri] int key)
        {
            return SingleResult.Create(db.Shippers.Where(shipper => shipper.Shipper_ID == key));
        }

        // PUT: odata/Shippers(5)
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Delta<Shipper> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Shipper shipper = await db.Shippers.FindAsync(key);
            if (shipper == null)
            {
                return NotFound();
            }

            patch.Put(shipper);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShipperExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(shipper);
        }

        // POST: odata/Shippers
        public async Task<IHttpActionResult> Post(Shipper shipper)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Shippers.Add(shipper);
            await db.SaveChangesAsync();

            return Created(shipper);
        }

        // PATCH: odata/Shippers(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<Shipper> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Shipper shipper = await db.Shippers.FindAsync(key);
            if (shipper == null)
            {
                return NotFound();
            }

            patch.Patch(shipper);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShipperExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(shipper);
        }

        // DELETE: odata/Shippers(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            Shipper shipper = await db.Shippers.FindAsync(key);
            if (shipper == null)
            {
                return NotFound();
            }

            db.Shippers.Remove(shipper);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Shippers(5)/Orders
        [EnableQuery]
        public IQueryable<Order> GetOrders([FromODataUri] int key)
        {
            return db.Shippers.Where(m => m.Shipper_ID == key).SelectMany(m => m.Orders);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ShipperExists(int key)
        {
            return db.Shippers.Count(e => e.Shipper_ID == key) > 0;
        }
    }
}
