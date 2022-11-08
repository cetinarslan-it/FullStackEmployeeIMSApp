using EmployeeIMSApp.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace EmployeeIMSApp.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class EmployeeController : ControllerBase
    {  
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            List<Employee> employeeList = _employeeService.GetAll();
            return Ok(employeeList);
        }

        [HttpGet]
        public IActionResult Search(string name = "")
        {
           List<Employee> searchResult= _employeeService.GetByName(name);
            return Ok(searchResult);
                  
        }

        [HttpPost]
        public IActionResult AddNewEmployee(Employee employee)
        {
            Employee newEmployee = _employeeService.Save(employee);
            return Ok(newEmployee); 
          
        }

        [HttpPut]
        public IActionResult UpdateEmployee(Employee employee)
        {
            Employee updatedEmployee = _employeeService.Update(employee);
            return Ok(updatedEmployee);
        }

        [HttpDelete]
        public IActionResult DeleteEmployee(Employee employee)
        {
            _employeeService.Delete(employee);
            return Ok(employee);
        }
    }
}