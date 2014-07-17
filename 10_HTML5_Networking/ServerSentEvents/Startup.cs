using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ServerSentEvents.Startup))]
namespace ServerSentEvents
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
