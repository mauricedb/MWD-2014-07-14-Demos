using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace AngularJSandAJAX.Models
{
    public class BooksRepository : IBooksRepository
    {
        private static List<Book> _books;

        static BooksRepository()
        {
            _books = new List<Book>()
            {
                new Book()
                {
                    Id = 1,
                    Title = "The Ultimate Hitchhiker's Guide to the Galaxy",
                    Author = "Douglas Adams",
                },
                new Book()
                {
                    Id = 2,
                    Title = "2001: A Space Odyssey",
                    Author = "Arthur C. Clarke",
                },
                new Book()
                {
                    Id = 3,
                    Title = "The War of the Worlds",
                    Author = "H G Wells",
                },
                new Book()
                {
                    Id = 4,
                    Title = "Jurassic Park",
                    Author = "Michael Crichton",
                },
                new Book()
                {
                    Id = 5,
                    Title = "I, Robot",
                    Author = "Isaac Asimov",
                },
            };
        }

        public List<Book> GetBooks()
        {
            return _books.OrderBy(b => b.Id).ToList();
        }

        public Book GetBook(int id)
        {
            return _books.SingleOrDefault(b => b.Id == id);
        }

        public void Dispose()
        {
        }

        public Book AddBook(Book newBook)
        {
            Validate(newBook);

            newBook.Id = Environment.TickCount;
            _books.Add(newBook);

            return newBook;
        }

        public Book UpdateBook(Book newBook)
        {
            Validate(newBook);

            var oldBook = _books.Single(b => b.Id == newBook.Id);
            _books.Remove(oldBook);
            _books.Add(newBook);
            return newBook;
        }


        public void DeleteBook(int id)
        {
            var oldBook = _books.SingleOrDefault(b => b.Id == id);
            if (oldBook != null)
            {
                _books.Remove(oldBook);
            }
        }

        private void Validate(Book book)
        {
            if (String.IsNullOrWhiteSpace(book.Title))
            {
                throw new ValidationException("The Title is required.");
            }
            if (String.IsNullOrWhiteSpace(book.Author))
            {
                throw new ValidationException("The Author is required.");
            }
        }
    }
}