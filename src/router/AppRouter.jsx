import { useRoutes } from "react-router-dom";
import HomeMenu from "../pages/HomeMenu/HomeMenu";
import Menu from "../pages/Menu/Menu";
import About from "../pages/About/About";
import Chef from "../pages/Chef/Chef";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import Registration from "../pages/Registration/Registration";

const AppRouter = () => {
  const element = useRoutes([
    { path: "/", element: <HomeMenu /> },
    { path: "/recipe", element: <Menu /> },
    { path: "/about", element: <About /> },
    { path: "/chef", element: <Chef /> },
    { path: "/contact", element: <Contact /> },
    { path: "/shop", element: <Shop /> },
    { path: "/registration", element: <Registration /> },
  ]);
  return element;
};

export default AppRouter;
