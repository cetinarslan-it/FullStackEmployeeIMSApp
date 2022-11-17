using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeIMSApp.Model.Entities
{
    [Table("Role")]
    public class Role
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

       // public ICollection<UserRole> UserRoles { get; set; }
   
      
        
    }
}