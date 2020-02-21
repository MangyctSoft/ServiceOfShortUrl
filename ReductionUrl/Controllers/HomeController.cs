using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReductionUrl.Services.Interfaces;

namespace ReductionUrl.Controllers
{
    public class HomeController : Controller
    {

        
        public IActionResult Index()
        {
           
                return View();
        
        }

    }
}