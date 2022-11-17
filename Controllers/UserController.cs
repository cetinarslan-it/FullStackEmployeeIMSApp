using EmployeeIMSApp.Services;
using EmployeeIMSApp.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace EmployeeIMSApp.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UserController : ControllerBase
    {  
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            List<User> userList = _userService.GetAll();
            return Ok(userList);
        }

        [HttpGet]
        public IActionResult Search(string name = "")
        {
           List<User> searchResult= _userService.GetByName(name);
            return Ok(searchResult);
                  
        }

        [HttpPost]
        public IActionResult AddNewUser(User user)
        {
            User newUser = _userService.Save(user);
            return Ok(newUser);   
        }

        [HttpPut]
        public IActionResult UpdateUser(User user)
        {
            User updateduser = _userService.Update(user);
            return Ok(updateduser);
        }

        [HttpDelete]
        public IActionResult DeleteUser(User user)
        {
            _userService.Delete(user);
            return Ok(user);
        }
    }
}