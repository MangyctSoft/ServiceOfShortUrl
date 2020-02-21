using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReductionUrl.Services.Interfaces;

namespace ReductionUrl.Controllers
{
    public class RendingController : Controller
    {
        IUrlService _urlService;

        public RendingController(IUrlService urlService)
        {
            _urlService = urlService;
        }


        public async Task<IActionResult> Out()
        {
            var request = Request.Path;

            var findShortUrl = await _urlService.FindUrl(request);

            if (findShortUrl == null)
            {
                return RedirectToRoute("default", new { controller = "Home", action = "Index" });
            }

            var redirect = findShortUrl.LongUrl;
            await _urlService.Counter(findShortUrl.ID);

            return Redirect(redirect);
        }
    }
}