using System.Linq;
using Microsoft.EntityFrameworkCore;
using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public class UserRoleService : IUserRoleService
    {
        private readonly AppDataContext _context;
   
        public UserRoleService(AppDataContext context)
        {
            _context = context;
        }

        public List<string> GetByUserId(int userId)
        {
            var userRoles = _context.Users_Roles.Where(ur=>ur.UserId==userId).ToList();

            var rolesList = new List<string>();

            foreach(var userRole in userRoles)
            {
                var role = _context.Roles.FirstOrDefault(x => x.Id == userRole.RoleId);

                rolesList.Add(role.Name);
                
                Console.WriteLine(role.Name);
            }

            return rolesList;   
        }
    }
}