using EmployeeIMSApp.Services;
using EmployeeIMSApp.Model.Entities;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeIMSApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {  
        private readonly ILoginService _loginService;
        private readonly ITokenService _tokenService;

        public AuthController(ILoginService loginService, ITokenService tokenService)
        {
            _loginService = loginService;
            _tokenService = tokenService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginAsync(LoginRequest loginRequest)
        {
            var user  = await _loginService.AuthenticateAsync(loginRequest.UserName, loginRequest.Password);
            if(user != null)
            {
               var token = await _tokenService.CreateTokenAsync(user);

               return Ok(token);
            }
            return BadRequest("Username or password is incorrect");
        }
    }
}

