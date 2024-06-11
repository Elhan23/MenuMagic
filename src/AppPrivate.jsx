import { Navigate } from "react-router-dom";

const AppPrivate = ({ Component }) => {
  const token = localStorage.getItem("access_token");
  let isLogged = false;

  if (token) {
    try {
      isLogged = true;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  if (!isLogged) {
    return <Navigate to="/registration" />;
  }
  return Component
};
export default AppPrivate;
