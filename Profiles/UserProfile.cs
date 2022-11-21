using AutoMapper;

namespace EmployeeIMSApp.Profiles
{
    public class UsersProfile : Profile
    {
        public UsersProfile()
        {
            CreateMap<Model.Entities.User, Model.DTO.UserDTO>()
                .ReverseMap();
        }
    }
}