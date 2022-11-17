import { Employee } from "./components/MyComponents/Employee";
import { EmployeeAdd } from "./components/MyComponents/EmployeeAdd";
import { EmployeeList } from "./components/MyComponents/EmployeeList";
import { Auth } from "./components/MyComponents/Auth";


const AppRoutes = [
  {
    index: true,
    element: <Auth/>
  },
  {
    path: '/employee',
    element: <Employee />
  },
  {
    path: '/employeeAdd',
    element: <EmployeeAdd />
  },
  {
    path: '/employeeList',
    element: <EmployeeList/>
  }
];

export default AppRoutes;
