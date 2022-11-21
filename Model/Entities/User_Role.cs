using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeIMSApp.Model.Entities
{
    [Table("User_Role")]
    public class User_Role
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int RoleId { get; set; }
        public Role Role { get; set; }
    }
}


