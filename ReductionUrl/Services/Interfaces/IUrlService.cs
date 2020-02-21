using DBModels;
using System.Threading.Tasks;

namespace ReductionUrl.Services.Interfaces
{
    public interface IUrlService
    {
        Task<StoreUrl> FindUrl(string shortUrl);
        Task Counter(int id);
    }
}
