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
    [Authorize]
    public class UserController : ControllerBase
    {  
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var userList = _userService.GetAll();

            var userListDTO = _mapper.Map<List<Model.DTO.UserDTO>>(userList);

            return Ok(userListDTO);
        }

        [HttpGet]
        public IActionResult Search(string name = "")
        {
           var searchResult= _userService.GetByName(name);

            var searchResultDTO = _mapper.Map<List<Model.DTO.UserDTO>>(searchResult);

            return Ok(searchResultDTO);
                  
        }

        [HttpPost]
        public IActionResult AddNewUser(UserDTO userDTO)
        {
            var newUserEntity = _mapper.Map<Model.Entities.User>(userDTO);

            var newUserDTO = _userService.Save(newUserEntity);

            return Ok(newUserDTO);   
        }

        [HttpPut]
        public IActionResult UpdateUser(UserDTO userDTO)
        {
            var updateUserEntity = _mapper.Map<Model.Entities.User>(userDTO);

            var updatedUserDTO = _userService.Update(updateUserEntity);

            return Ok(updatedUserDTO);
        }

        [HttpDelete]
        public IActionResult DeleteUser(UserDTO userDTO)
        {
            var deleteUserEntity = _mapper.Map<Model.Entities.User>(userDTO);

            _userService.Delete(deleteUserEntity);

            return Ok(userDTO);
        }
    }
}