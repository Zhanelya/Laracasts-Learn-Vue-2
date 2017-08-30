using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SPAEssentialsRouting.Models;

namespace SPAEssentialsRouting.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Statuses()
        {
            var post1 = new Post()
            {
                User = new User()
                {
                    Name = "Joe"
                },
                Body = "Hello From Joe",
                Date = "01/08/2017"
            };

            var post2 = new Post()
            {
                User = new User()
                {
                    Name = "Adam"
                },
                Body = "Hello From Adam",
                Date = "01/07/2017"
            };

            return Json(new[]
            {
                post1, post2
            });
        }
    }
}
