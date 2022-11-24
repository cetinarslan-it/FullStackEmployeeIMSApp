using EmployeeIMSApp.Services;
using EmployeeIMSApp.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

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
        [Authorize(Roles="admin, member")]
        public IActionResult GetAll()
        {
            List<Employee> employeeList = _employeeService.GetAll();
            return Ok(employeeList);
        }

        [HttpGet]
        [Authorize(Roles="admin, member")]
        public IActionResult Search(string name = "")
        {
           List<Employee> searchResult= _employeeService.GetByName(name);
            return Ok(searchResult);
                  
        }

        [HttpPost]
        [Authorize(Roles="admin")]
        public IActionResult AddNewEmployee(Employee employee)
        {
            Employee newEmployee = _employeeService.Save(employee);
            return Ok(newEmployee); 
          
        }

        [HttpPut]
        [Authorize(Roles="admin")]
        public IActionResult UpdateEmployee(Employee employee)
        {
            Employee updatedEmployee = _employeeService.Update(employee);
            return Ok(updatedEmployee);
        }

        [HttpDelete]
        [Authorize(Roles="admin")]
        public IActionResult DeleteEmployee(Employee employee)
        {
            _employeeService.Delete(employee);
            return Ok(employee);
        }
    }
}