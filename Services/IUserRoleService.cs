using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public interface IUserRoleService
    {  
        public List<string> GetByUserId(int userId);
    }
}