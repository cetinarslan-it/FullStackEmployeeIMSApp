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
            return _context.Roles.ToList();
        }

        public Role Update(Role role)
        {
            var  roleFromDb = _context.Roles.First(x=>x.Id == role.Id);
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
 
