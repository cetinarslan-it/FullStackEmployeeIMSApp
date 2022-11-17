using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeIMSApp.Model.Entities
{
    [Table("User")]
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string Password { get; set; }
        public string Email{ get; set; }
        // [NotMapped]
        // public List<string> Roles { get; set; }
        // public ICollection<UserRole> UserRoles { get; set; }
        
    }
}