using EmployeeMISApp.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeeMISApp
{
    public class AppDataContext : DbContext
    {   
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {
                
        }

        public DbSet<Employee> Employees{ get; set; }
    }
}
