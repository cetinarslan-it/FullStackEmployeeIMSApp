using System.ComponentModel.DataAnnotations;

namespace EmployeeIMSApp.Model.Entities
{
    public class Role
    {
        public Role()
        {
            this.Users = new HashSet<User>();
        }

        public int RoleId { get; set; }
        [Required]
        public string RoleName { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }

}
