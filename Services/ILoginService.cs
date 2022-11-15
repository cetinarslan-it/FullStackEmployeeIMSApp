using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public interface ILoginService
    {
        Task<User> AuthenticateAsync(string username, string password);
    }
}