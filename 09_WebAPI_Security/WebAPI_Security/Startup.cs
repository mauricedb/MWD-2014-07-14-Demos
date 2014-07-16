using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;

namespace WebAPI_Security
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var provider = new OAuthAuthorizationServerProvider()
            {
                OnValidateClientAuthentication = ctx =>
                {
                    ctx.Validated();
                    return Task.FromResult(0);
                },
                OnGrantResourceOwnerCredentials = ctx =>
                {
                    if (ctx.UserName == "maurice" && ctx.Password == "secret")
                    {
                        var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, ctx.UserName) },
                            "password");
                        ctx.Validated(identity);
                    }
                    return Task.FromResult(0);
                }
            };

            var options = new OAuthAuthorizationServerOptions()
            {
                TokenEndpointPath = new PathString("/token"),
                AllowInsecureHttp = true, // Develop only !!!!!
                Provider = provider
            };
            app.UseOAuthAuthorizationServer(options);


            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());


            var config = new HttpConfiguration();
            //config.Filters.Add(new AuthorizeAttribute());
            config.MapHttpAttributeRoutes();
            app.UseWebApi(config);
        }
    }
}