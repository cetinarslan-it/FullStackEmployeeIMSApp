using System.Linq;
using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly AppDataContext _context;
   
        public EmployeeService(AppDataContext context)
        {
            _context = context;
        }
        public List<Employee> GetAll()
        {
            return _context.Employees.ToList();
        }

        public List<Employee> GetByName(string name)
        {

            var linq = _context.Employees.Select(x=>x);

            if (!string.IsNullOrWhiteSpace(name))
            
                linq = linq.Where(l => l.Name.ToUpper().Contains(name.ToUpper()));

            return linq.ToList();
            
        }

        public Employee Update(Employee employee)
        {
            Employee libFromDb = _context.Employees.First(x=>x.Id == employee.Id);
            _context.Entry(libFromDb).CurrentValues.SetValues(employee);
            _context.SaveChanges();

            return employee;
        }

        public void Delete(Employee employee)
        {
             _context.Entry(employee).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
             _context.SaveChanges();

            // _context.Employees.Remove(employee);
            //_context.SaveChanges();

        }

        public Employee Save(Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();

            return employee;
        }
    }

}
