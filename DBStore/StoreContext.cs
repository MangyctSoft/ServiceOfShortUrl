using DBModels;
using Microsoft.EntityFrameworkCore;

namespace DBStore
{
    public class StoreContext : DbContext
    {
        public DbSet<StoreUrl> StoreUrls { get; set; }

        public StoreContext ()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=NEWLIFE2016\\SQLEXPRESS;Database=DBStoreUrl;Trusted_Connection=True;");
        }
    }
}
