using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public interface IRoleService
    {
        void Delete(Role role);
        List<Role> GetAll();
        Role Save(Role role);
        Role Update(Role role);
    }
}