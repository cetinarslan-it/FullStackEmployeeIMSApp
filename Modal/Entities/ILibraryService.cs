namespace FullStackLibraryApp.Modal.Entities
{
    public interface ILibraryService
    {
        void Delete(Library library);
        List<Library> GetAll();
        List<Library> GetByName(string name);
        Library Save(Library library);
        Library Update(Library library);
    }
}