using System.Linq;
using EmployeeIMSApp.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeeIMSApp.Services
{
    public class LoginService : ILoginService
    {
        private readonly AppDataContext _context;

        public LoginService(AppDataContext context)
        {
            _context = context;
        }

        public async Task<User> AuthenticateAsync(string email, string password)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email.ToLower() == email.ToLower() && x.Password == password);

            if (user == null)
            {
                return null;
            }

            // var userRole = await _context.Users_Roles.FirstOrDefaultAsync(x => x.UserId == user.Id);

            // if (userRole != null)
            // {
            //     var role = await _context.Roles.FirstOrDefaultAsync(x => x.Id == userRole.RoleId);
            //     if (role != null)
            //     {
            //         user.RoleName = role.Name;
            //     }

            // }
            user.Password = null;
            return user;
        }
    }
}
