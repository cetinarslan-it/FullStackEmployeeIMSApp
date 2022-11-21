using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeIMSApp.Model.DTO
{
    [Table("UserRequest")]
    public class UserDTO
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string Password { get; set; }
        public string Email{ get; set; } 
    }
}