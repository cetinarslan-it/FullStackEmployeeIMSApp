using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeIMSApp.Model.DTO
{
    [Table("RoleDTO")]
    public class RoleDTO
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
          
    }
}