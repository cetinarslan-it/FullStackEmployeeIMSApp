using System.ComponentModel.DataAnnotations;

namespace EmployeeIMSApp.Model.Entities
{
    public class User
    {
        public User()
        {
            this.Roles = new HashSet<Role>();
        }

        public int UserId { get; set; }
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Role> Roles { get; set; }
    }
}
