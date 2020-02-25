using DBModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReductionUrl.Services.Interfaces
{
    public interface IStoreService
    {
        Task<IEnumerable<StoreUrl>> GetUrls();
        Task<StoreUrl> GetUrl(int id);
        Task AddUrl(string url);
        Task DeleteUrl(int id);
        Task UpdateUrl(int id, string longUrl);
        Task<StoreUrl> FindUrl(string shortUrl);
        Task Counter(int id);
    }
}
