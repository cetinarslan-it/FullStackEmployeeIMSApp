using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeIMSApp.Model.Entities
{
    [Table("LoginRequest")]
    public class LoginRequest
    { 
        public string UserName { get; set; }
        public string Password { get; set; }      
    }
}