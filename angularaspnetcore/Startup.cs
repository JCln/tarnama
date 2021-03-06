using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using angularaspnetcore.Helpers;
using angularaspnetcore.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace angularaspnetcore {
  public class Startup {
    public Startup (IConfiguration configuration) {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices (IServiceCollection services) {
      services.AddCors ();
      services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_2);

      // configure strongly typed settings objects
      var appSettingsSection = Configuration.GetSection ("AppSettings");
      services.Configure<AppSettings> (appSettingsSection);

      // configure jwt authentication
      var appSettings = appSettingsSection.Get<AppSettings> ();
      var key = Encoding.ASCII.GetBytes (appSettings.Secret);
      services.AddAuthentication (x => {
          x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
          x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer (x => {
          x.RequireHttpsMetadata = false;
          x.SaveToken = true;
          x.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey (key),
            ValidateIssuer = false,
            ValidateAudience = false
          };
        });

      // configure DI for application services
      services.AddScoped<IUserService, UserService> ();
      services.Configure<CookiePolicyOptions> (options =>

        {
          // This lambda determines whether user consent for non-essential cookies is needed for a given request.
          options.CheckConsentNeeded = context => true;
          options.MinimumSameSitePolicy = SameSiteMode.None;
        });

      services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_2);
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
      if (env.IsDevelopment ()) {
        app.UseDeveloperExceptionPage ();
      } else {
        app.UseExceptionHandler ("/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts ();
      }

      app.UseHttpsRedirection ();
      app.UseStaticFiles ();
      app.UseCookiePolicy ();

      app.UseCors (x => x
        .AllowAnyOrigin ()
        .AllowAnyMethod ()
        .AllowAnyHeader ());

      app.UseAuthentication ();

      app.UseMvc ();
      app.UseMvc ();
    }
  }
}
