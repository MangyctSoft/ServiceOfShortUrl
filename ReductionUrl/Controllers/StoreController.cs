using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBModels;
using Microsoft.AspNetCore.Mvc;
using ReductionUrl.Services.Interfaces;

namespace ReductionUrl.Controllers
{
    [Route("api/[controller]")]
    public class StoreController : Controller
    {
        IStoreService _storeService;

        public StoreController(IStoreService storeRepository)
        {
            _storeService = storeRepository;
        }

        [Route("store")]
        [HttpGet]
        public async Task<Page<StoreUrl>> GetStore(int pageIndex)
        {
            return await _storeService.GetUrls(pageIndex, 10);
        }

        [Route("short")]
        [HttpGet]
        public async Task<StoreUrl> SortUrl([FromBody] string shortUrl)
        {
            return await _storeService.FindUrl(shortUrl);
        }

        [Route("add")]
        [HttpPost]
        public async Task AddUrl([FromBody] string texturl)
        {
            await _storeService.AddUrl(texturl);
        }

        [Route("remove")]
        [HttpDelete]
        public async Task RemoveUrl(int id)
        {
            await _storeService.DeleteUrl(id);
        }

        [Route("update")]
        [HttpGet]
        public async Task<StoreUrl> UpdateUrl([FromBody] string shortUrl)
        {
            return await _storeService.FindUrl(shortUrl);
        }
    }
}