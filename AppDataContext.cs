using FullStackLibraryApp.Modal.Entities;
using Microsoft.EntityFrameworkCore;

namespace FullStackLibraryApp
{
    public class AppDataContext : DbContext
    {   
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {
                
        }

        public DbSet<Library> Libraries { get; set; }
    }
}
