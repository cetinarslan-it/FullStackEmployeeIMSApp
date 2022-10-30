using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackLibraryApp.Modal.Entities
{
    [Table("Library")]
    public class Library
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public String Name { get; set; }
        [Required]
        public String Address{ get; set; }
        
        public String Telephone { get; set; }
    }
}

