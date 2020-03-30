using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReductionUrl.Services.Interfaces;

namespace ReductionUrl.Controllers
{
    /// <summary>
    /// Контроллер для перехода по короткой ссылке.
    /// </summary>
    public class RendingController : Controller
    {
        IStoreService _urlService;

        public RendingController(IStoreService urlService)
        {
            _urlService = urlService;
        }


        public async Task<IActionResult> Out()
        {
            var request = Request.Path;
            var hasUrl = request.Value.Substring(1).ToLower();
           
            var findShortUrl = await _urlService.FindUrl(hasUrl);

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