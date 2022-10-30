using FullStackLibraryApp.Modal.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace FullStackLibraryApp.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class LibraryController : ControllerBase
    {  
        private readonly ILibraryService _libraryService;

        public LibraryController(ILibraryService libraryService)
        {
            _libraryService = libraryService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            List<Library> libraryList = _libraryService.GetAll();
            return Ok(libraryList);
        }

        [HttpGet]
        public IActionResult Search(string name)
        {
           List<Library> searchResult= _libraryService.GetByName(name);
            return Ok(searchResult);
                  
        }

        [HttpPost]
        public IActionResult AddNewLibrary(Library library)
        {
            Library newLibrary = _libraryService.Save(library);
            return Ok(newLibrary); 
          
        }

        [HttpPut]
        public IActionResult UpdateLibrary(Library library)
        {
            Library updatedLibrary = _libraryService.Update(library);
            return Ok(updatedLibrary);
        }

        [HttpDelete]
        public IActionResult DeleteLibrary(Library library)
        {
            _libraryService.Delete(library);
            return Ok(library);
        }
    }
}