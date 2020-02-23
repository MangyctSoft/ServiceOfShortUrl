using DBModels;
using System.Threading.Tasks;

namespace ReductionUrl.Services.Interfaces
{
    public interface IStoreService
    {
        Task<Page<StoreUrl>> GetUrls(int index, int pageSize);
        Task<StoreUrl> GetUrl(int id);
        Task AddUrl(string url);
        Task DeleteUrl(int id);
        Task UpdateUrl(StoreUrl url);
        Task<StoreUrl> FindUrl(string shortUrl);
        Task Counter(int id);
    }
}
