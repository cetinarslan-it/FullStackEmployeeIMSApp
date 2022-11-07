import { Home } from "./components/Home";
import { Employee } from "./components/MyComponents/Employee";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/employee',
    element: <Employee />
  }
];

export default AppRoutes;
