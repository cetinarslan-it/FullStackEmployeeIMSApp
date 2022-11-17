using System.Linq;
using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public class UserService : IUserService
    {
        private readonly AppDataContext _context;
   
        public UserService(AppDataContext context)
        {
            _context = context;
        }
        public List<User> GetAll()
        {
            return _context.Users.ToList();
        }

        public List<User> GetByName(string name)
        {

            var linq = _context.Users.Select(x=>x);

            if (!string.IsNullOrWhiteSpace(name))
            
                linq = linq.Where(l => l.FullName.ToUpper().Contains(name.ToUpper()));

            return linq.ToList();           
        }

        public User Update(User user)
        {
            User userFromDb = _context.Users.First(x=>x.Id == user.Id);
            _context.Entry(userFromDb).CurrentValues.SetValues(user);
            _context.SaveChanges();

            return user;
        }

        public void Delete(User user)
        {
             _context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
             _context.SaveChanges();

            // _context.Users.Remove(user);
            //_context.SaveChanges();
        }

        public User Save(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }
       
    }

}
 
