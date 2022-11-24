using AutoMapper;

namespace EmployeeIMSApp.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<Model.Entities.User, Model.DTO.UserDTO>()
                .ReverseMap();
        }
    }
}