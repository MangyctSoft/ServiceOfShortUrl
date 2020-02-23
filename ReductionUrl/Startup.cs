using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBStore.Interfaces;
using DBStore.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Internal;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.DependencyInjection;
using ReductionUrl.Services.Implementation;
using ReductionUrl.Services.Interfaces;

namespace ReductionUrl
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddScoped<IStoreRepository>(provider => new StoreRepository());
            services.AddScoped<IStoreService, StoreService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
                routes.MapRoute(
                  name: "Reduction",
                  template: "{id?}",
                  defaults: new { controller = "Rending", action = "Out" });
                routes.MapRoute(
                        name: "DefaultApi",
                        template: "api/{controller}/{action}/{id?}");
                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
            });

           

          

        }
    }
}
