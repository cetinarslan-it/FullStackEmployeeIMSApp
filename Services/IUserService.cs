using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public interface IUserService
    {
        void Delete(User user);
        List<User> GetAll();
        List<User> GetByName(string name);
        User Save(User user);
        User Update(User user);
    }
}