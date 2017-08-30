using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Axios.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Skills()
        {
            return Json(new []
            {
                new { name = "Skill-1" },
                new { name = "Skill-2" },
                new { name = "Skill-3" }
            });
        }
    }
}
