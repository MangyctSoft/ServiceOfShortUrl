using DBModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DBStore.Interfaces
{
    public interface IStoreRepository
    {
        Task<IEnumerable<StoreUrl>> GetUrls();
        Task<StoreUrl> GetUrl(int urlId);       
        Task AddUrl(StoreUrl url);
        Task DeleteUrl(int urlId);
        Task UpdateUrl(StoreUrl url);
        Task<StoreUrl> FindUrl(string shortUrl);

    }
}
