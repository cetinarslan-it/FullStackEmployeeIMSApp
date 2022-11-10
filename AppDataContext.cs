using EmployeeIMSApp.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeeIMSApp
{
    public class AppDataContext : DbContext
    {   
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {
                
        }

        public DbSet<Employee> Employees{ get; set; }

        public DbSet<User> Users{ get; set; }
    }
}
