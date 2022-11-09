import { Home } from "./components/MyComponents/Login";
import { Employee } from "./components/MyComponents/Employee";
import { EmployeeAdd } from "./components/MyComponents/EmployeeAdd";
import { EmployeeList } from "./components/MyComponents/EmployeeList";
import { Login } from "./components/MyComponents/Login";


const AppRoutes = [
  {
    index: true,
    element: <Login/>
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
  },
];

export default AppRoutes;
