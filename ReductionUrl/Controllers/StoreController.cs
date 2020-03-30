using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBModels;
using Microsoft.AspNetCore.Mvc;
using ReductionUrl.Services.Interfaces;

namespace ReductionUrl.Controllers
{
    /// <summary>
    /// Контроллер для работы с url-адрессом.
    /// </summary>
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
        public async Task<IEnumerable<StoreUrl>> GetStore()
        {
            return await _storeService.GetUrls();
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
        public async Task RemoveUrl([FromBody]int id)
        {
            await _storeService.DeleteUrl(id);
        }

        [Route("update")]
        [HttpPut]
        public async Task UpdateUrl([FromBody] StoreUrl store)
        {
            await _storeService.UpdateUrl(store.ID, store.LongUrl);
        }
    }
}