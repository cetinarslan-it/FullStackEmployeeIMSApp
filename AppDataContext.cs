using EmployeeIMSApp.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeeIMSApp
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {

        }

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<User_Role>()
        .HasKey(ur => new { ur.UserId, ur.RoleId });  
    modelBuilder.Entity<User_Role>()
        .HasOne(ur => ur.User)
        .WithMany(b => b.Users_Roles)
        .HasForeignKey(ur => ur.UserId);  
    modelBuilder.Entity<User_Role>()
        .HasOne(ur => ur.Role)
        .WithMany(c => c.Users_Roles)
        .HasForeignKey(ur => ur.RoleId);
}
      
        public DbSet<Employee> Employees { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }  
        public DbSet<User_Role> Users_Roles { get; set; }
    
    }
}
