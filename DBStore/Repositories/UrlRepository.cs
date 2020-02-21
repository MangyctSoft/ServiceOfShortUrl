using DBModels;
using DBStore.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace DBStore.Repositories
{
    public class UrlRepository : IUrlRepository
    {

        public async Task AddUrl(StoreUrl url)
        {
            using (var context = new StoreContext())
            {
                context.StoreUrls.Add(url);
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteUrl(int urlId)
        {
            using (var context = new StoreContext())
            {
                var url = new StoreUrl() { ID = urlId };
                context.StoreUrls.Remove(url);
                await context.SaveChangesAsync();
            }
        }

        public async Task<StoreUrl> GetUrl(int urlId)
        {
            using (var context = new StoreContext())
            {
                return await context.StoreUrls.FirstOrDefaultAsync(p => p.ID == urlId);
            }
        }

        public async Task<Page<StoreUrl>> GetUrls(int index, int pageSize)
        {
            var result = new Page<StoreUrl>() { CurrentPage = index, PageSize = pageSize };

            using (var context = new StoreContext())
            {
                var query = context.StoreUrls.AsQueryable(); 
                result.TotalPages = await query.CountAsync();
                result.Records = await query.OrderByDescending(p => p.Created).Skip(index * pageSize).Take(pageSize).ToListAsync();
            }

            return result;
        }

        public async Task UpdateUrl(int urlId)
        {
            using (var context = new StoreContext())
            {
                var url = new StoreUrl() { ID = urlId };
                context.StoreUrls.Update(url);
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
