using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace ServerSentEvents.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Events()
        {
            Response.ContentType = "text/event-stream";

            for (int i = 0; i < 10; i++)
            {
                Response.Write("data: " + DateTime.Now.ToLongTimeString() + "\n\n");
                Response.Flush();
                Thread.Sleep(1000);
            }

            return Content("data: " + DateTime.Now.ToLongTimeString() + "\n\n");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}