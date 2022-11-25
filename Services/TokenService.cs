using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using EmployeeIMSApp.Model.Entities;
using Microsoft.IdentityModel.Tokens;

namespace EmployeeIMSApp.Services
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _configuration;

        public TokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public Task<string> CreateTokenAsync(User user)
        {
            var claims = new List<Claim>();

            claims.Add(new Claim(ClaimTypes.GivenName, user.UserName));
            claims.Add(new Claim(ClaimTypes.Email, user.Email));

            user.Roles.ToList().ForEach(r => {
                claims.Add(new Claim(ClaimTypes.Role, r.RoleName));
            });

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials);

            return Task.FromResult(new JwtSecurityTokenHandler().WriteToken(token));
        }
    }
}