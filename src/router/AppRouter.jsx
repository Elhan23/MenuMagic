import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Chef from "../pages/Chef/Chef";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import Registration from "../pages/Registration/Registration";
import AboutUs from "../pages/AboutUs/AboutUs";
import AppPrivate from '../AppPrivate';
import Login from "../pages/Login/Login";
import Products from "../../Admin/Products/Products";


const AppRouter = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/recipe", element: <AppPrivate Component={AboutUs}/> },
    { path: "/chef", element: <AppPrivate Component={Chef}/> },
    { path: "/aboutus", element: <AppPrivate Component={AboutUs}/> },
    { path: "/contactus", element: <Contact /> },
    { path: "/shop", element: <Shop/>},
    { path: "/registration", element: <Registration/>},
    { path: "/login", element: <Login/>},
    // admin route 
    {path: '/admin/product', element: <Products/>}
  ]);
  return element;
};

export default AppRouter;
