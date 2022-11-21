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
    public class RoleController : ControllerBase
    {  
        private readonly IRoleService _roleService;
        private readonly IMapper _mapper;

        public RoleController(IRoleService roleService, IMapper mapper)
        {
            _roleService = roleService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var roleList = _roleService.GetAll();

            var roleListDTO = _mapper.Map<List<Model.DTO.RoleDTO>>(roleList);

            return Ok(roleListDTO);
        }

        [HttpPost]
        public IActionResult AddNewRole(RoleDTO roleDTO)
        {
            var newRoleEntity = _mapper.Map<Model.Entities.Role>(roleDTO);

            var newRoleDTO = _roleService.Save(newRoleEntity);

            return Ok(newRoleDTO);   
        }

        [HttpPut]
        public IActionResult UpdateRole(RoleDTO roleDTO)
        {
            var updateRoleEntity = _mapper.Map<Model.Entities.Role>(roleDTO);

            var updatedRoleDTO = _roleService.Update(updateRoleEntity);
            
            return Ok(updatedRoleDTO);
        }

        [HttpDelete]
        public IActionResult DeleteRole(RoleDTO roleDTO)
        {
            var deleteRoleEntity = _mapper.Map<Model.Entities.Role>(roleDTO);

            _roleService.Delete(deleteRoleEntity);

            return Ok(roleDTO);
        }
    }
}