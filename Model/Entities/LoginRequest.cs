using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeIMSApp.Model.Entities
{
    [Table("LoginRequest")]
    public class LoginRequest
    { 
        public string Email { get; set; }
        public string Password { get; set; }      
    }
}