using System.Linq;
using System.Security.Claims;
using System.Web.Http;

namespace WebAPI_Security.Api
{
    [Route("api/test")]
    [Authorize()]
    public class TestController: ApiController
    {
        public IHttpActionResult Get()
        {
            var name = ((ClaimsIdentity) User.Identity).Claims.First(cl => cl.Type == ClaimTypes.Name).Value;
            return Ok(string.Format("{1} IsAuthenticated : {0}", User.Identity.IsAuthenticated, name));
        }
    }
}