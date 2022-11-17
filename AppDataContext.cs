using EmployeeIMSApp.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeeIMSApp
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {

        }

// protected override void OnModelCreating(ModelBuilder modelBuilder)
// {
//     modelBuilder.Entity<UserRole>()
//         .HasKey(ur => new { ur.UserId, ur.RoleId });  
//     modelBuilder.Entity<UserRole>()
//         .HasOne(ur => ur.User)
//         .WithMany(b => b.UserRoles)
//         .HasForeignKey(ur => ur.UserId);  
//     modelBuilder.Entity<UserRole>()
//         .HasOne(ur => ur.Role)
//         .WithMany(c => c.UserRoles)
//         .HasForeignKey(ur => ur.RoleId);
// }
      
        public DbSet<Employee> Employees { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
     //   public DbSet<UserRole> UserRoles { get; set; }
    
    }
}
