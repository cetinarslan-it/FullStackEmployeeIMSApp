using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EmployeeIMSApp.Model.Entities;

namespace EmployeeIMSApp.Model.DTO
{
    [Table("RoleDTO")]
    public class RoleDTO
    {
        [Key]
        public int RoleId { get; set; }
        [Required]
        public string RoleName { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}