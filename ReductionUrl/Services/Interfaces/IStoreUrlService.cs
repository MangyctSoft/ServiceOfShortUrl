using DBModels;
using System.Threading.Tasks;

namespace ReductionUrl.Services.Interfaces
{
    public class IStoreUrlService
    {
        Task<Page<StoreUrl>> GetUrls(int index, int pageSize);
        Task<StoreUrl> GetUrl(int urlId);
        Task AddUrl(StoreUrl url);
        Task DeleteUrl(int urlId);
        Task UpdateUrl(int urlId);
        Task<StoreUrl> FindUrl(string shortUrl);
    }
}
