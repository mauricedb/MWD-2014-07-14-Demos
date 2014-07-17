using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Offline.Startup))]
namespace Offline
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
