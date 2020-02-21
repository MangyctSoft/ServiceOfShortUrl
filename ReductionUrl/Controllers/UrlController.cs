using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBModels;
using DBStore.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ReductionUrl.Controllers
{
    [Route("api/[controller]")]
    public class UrlController : Controller
    {
        IUrlRepository _urlRepository;

        public UrlController(IUrlRepository urlRepository)
        {
            _urlRepository = urlRepository;
        }

        [Route("all")]
        [HttpGet]
        public async Task<Page<StoreUrl>> GetUrls(int pageIndex)
        {
            return await _urlRepository.GetUrls(pageIndex, 10);
        }

        [Route("short")]
        [HttpGet]
        public async Task<StoreUrl> SortUrl(string shortUrl)
        {
            return await _urlRepository.FindUrl(shortUrl);
        }
    }
}