using EmployeeIMSApp.Services;
using EmployeeIMSApp.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using EmployeeIMSApp.Model.DTO;

namespace EmployeeIMSApp.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [Authorize(Roles = "admin")]

    public class UserRoleController : ControllerBase
    {
        private readonly IUserRoleService _userRoleService;

        public UserRoleController(IUserRoleService userRoleService)
        {
            _userRoleService = userRoleService;

        }

        [HttpGet("{userId}")]
        public IActionResult GetUserRole(int userId)
        {
            var userRole = _userRoleService.GetByUserId(userId);

            return Ok(userRole);
        }

    }
}