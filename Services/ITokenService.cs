using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public interface ITokenService
    {
        Task<string> CreateTokenAsync(User user);
    }
}