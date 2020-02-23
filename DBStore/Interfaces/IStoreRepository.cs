using DBModels;
using System.Threading.Tasks;

namespace DBStore.Interfaces
{
    public interface IStoreRepository
    {
        Task<Page<StoreUrl>> GetUrls(int index, int pageSize);
        Task<StoreUrl> GetUrl(int urlId);       
        Task AddUrl(StoreUrl url);
        Task DeleteUrl(int urlId);
        Task UpdateUrl(StoreUrl url);
        Task<StoreUrl> FindUrl(string shortUrl);

    }
}
