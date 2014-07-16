using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Antlr.Runtime;
using WebAPI.Models;

namespace WebAPI.Api
{
    public class BooksController : ApiController
    {
        public IEnumerable<Book> GetBooks()
        {
            return new[]
            {
                new Book()
                {
                    Id = 1,
                    Titel = "A book"
                },
                new Book()
                {
                    Id = 2,
                    Titel = "Another book"
                }
            };
        }

        //public HttpResponseMessage GetBook(int id)
        //{
        //    if (id < 10)
        //    {

        //        var book= new Book()
        //        {
        //            Id = id,
        //            Titel = "A book"
        //        };
        //        return Request.CreateResponse(HttpStatusCode.OK, book);
        //    }
        //    else
        //    {
        //        return Request.CreateResponse(HttpStatusCode.NotFound);
        //    }
        //}


        public IHttpActionResult GetBook(int id)
        {
            if (id < 10)
            {

                var book = new Book()
                {
                    Id = id,
                    Titel = "A book"
                };
                return Ok(book);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
