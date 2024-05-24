import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./base/Header/HeaderPage";
import Footer from "./base/Footer/FooterPage";

function Layout({ children }) {
  const location = useLocation();
  const showLayout = !["/registration"].includes(location.pathname);

  if (!showLayout) {
    return <>{children}</>;
  }
  return (
    <div>
      <Header />
      <main className="main_top">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
