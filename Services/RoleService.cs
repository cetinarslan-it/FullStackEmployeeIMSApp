using System.Linq;
using Microsoft.EntityFrameworkCore;
using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public class RoleService : IRoleService
    {
        private readonly AppDataContext _context;
   
        public RoleService(AppDataContext context)
        {
            _context = context;
        }
        public List<Role> GetAll()
        {
            return _context.Roles.Include(r=>r.Users).ToList();
        }

        // public async Task<string> GetByEmailAsync(string email)
        // {
        //     var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.Contains(email));

        //     var role = _context.Roles.FirstOrDefault(r => r.Users == user.Id);

        //     //var userRoles = _context.Users_Roles.Where(ur => ur.UserId == user.Id).ToList();

        //    // var rolesList = new List<string>();
        
        //     // foreach (var userRole in userRoles)
        //     // {
        //     //     var role = await _context.Roles.FirstOrDefaultAsync(r => r.Id == userRole.RoleId);

        //     //     rolesList.Add(role.Name);

        //     //     Console.WriteLine(role.Name);
        //     // }

        //     var role = await _context.Roles.FirstOrDefaultAsync(r => r.Id == userRole.RoleId);
        //     return role.Name;
        // }

        public Role Update(Role role)
        {
            var  roleFromDb = _context.Roles.First(x=>x.RoleId == role.RoleId);
            _context.Entry(roleFromDb).CurrentValues.SetValues(role);
            _context.SaveChanges();

            return role;
        }

        public void Delete(Role role)
        {
             _context.Entry(role).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
             _context.SaveChanges();

            // _context.Users.Remove(user);
            //_context.SaveChanges();
        }

        public Role Save(Role role)
        {
            _context.Roles.Add(role);
            _context.SaveChanges();

            return role;
        }
    }

}
 
