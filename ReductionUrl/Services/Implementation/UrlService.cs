using DBModels;
using DBStore;
using Microsoft.EntityFrameworkCore;
using ReductionUrl.Services.Interfaces;
using System.Linq;
using System.Threading.Tasks;

namespace ReductionUrl.Services.Implementation
{
    public class UrlService : IUrlService
    {
        public async Task Counter(int id)
        {
            using (var context = new StoreContext())
            {
                var query = context.StoreUrls.AsQueryable();
                var update = await query.FirstOrDefaultAsync(q => q.ID == id);
                update.Count++;
                context.StoreUrls.Update(update);
                await context.SaveChangesAsync();
            }
        }

        public async Task<StoreUrl> FindUrl(string shortUrl)
        {
            var result = new StoreUrl();

            using (var context = new StoreContext())
            {
                var query = context.StoreUrls.AsQueryable();
                result = await query.Where(q => q.ShortUrl.Equals(shortUrl)).FirstOrDefaultAsync();
            }

            return result;
        }
    }
}
