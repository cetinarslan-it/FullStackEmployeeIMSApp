using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Model.DTO
{
    [Table("UserRequest")]
    public class UserDTO
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        public string Email{ get; set; }
        public virtual ICollection<Role> Roles { get; set; }

    }
}