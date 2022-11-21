using AutoMapper;

namespace EmployeeIMSApp.Profiles
{
    public class RoleProfile : Profile
    {
        public RoleProfile()
        {
            CreateMap<Model.Entities.Role, Model.DTO.RoleDTO>()
                .ReverseMap();
        }
    }
}