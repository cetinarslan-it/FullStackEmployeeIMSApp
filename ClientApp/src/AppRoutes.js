import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import { Library } from "./components/MyComponents/Library";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/library',
    element: <Library />
  }
];

export default AppRoutes;
