using System.Linq;

namespace FullStackLibraryApp.Modal.Entities
{
    public class LibraryService : ILibraryService
    {
        private readonly AppDataContext _context;
   
        public LibraryService(AppDataContext context)
        {
            _context = context;
        }
        public List<Library> GetAll()
        {
            return _context.Libraries.ToList();
        }

        public List<Library> GetByName(string name)
        {
           var linq = from libraries in _context.Libraries select libraries;

            if (!string.IsNullOrWhiteSpace(name))
            
                linq = linq.Where(l => l.Name.ToUpper().Contains(name.ToUpper()));

            return linq.ToList();
            
        }

        public Library Update(Library library)
        {
            Library libFromDb = _context.Libraries.First(x=>x.Id == library.Id);
            _context.Entry(libFromDb).CurrentValues.SetValues(library);
            _context.SaveChanges();

            return library;
        }

        public void Delete(Library library)
        {
            _context.Entry(library).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            _context.SaveChanges();

          //  _context.Libraries.Remove(library);
          //  _context.SaveChanges();
        }

        public Library Save(Library library)
        {
            _context.Libraries.Add(library);
            _context.SaveChanges();

            return library;
        }
    }

}
