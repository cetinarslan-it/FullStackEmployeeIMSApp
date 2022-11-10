using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public interface IEmployeeService
    {
        void Delete(Employee employee);
        List<Employee> GetAll();
        List<Employee> GetByName(string name);
        Employee Save(Employee employee);
        Employee Update(Employee employee);
    }
}