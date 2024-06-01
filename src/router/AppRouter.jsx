import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Chef from "../pages/Chef/Chef";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import Registration from "../pages/Registration/Registration";
import AboutUs from "../pages/AboutUs/AboutUs";


const AppRouter = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/recipe", element: <Menu /> },
    { path: "/chef", element: <Chef /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/contactus", element: <Contact /> },
    { path: "/shop", element: <Shop /> },
    { path: "/registration", element: <Registration /> },
  ]);
  return element;
};

export default AppRouter;
