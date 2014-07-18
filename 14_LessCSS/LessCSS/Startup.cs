using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LessCSS.Startup))]
namespace LessCSS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
