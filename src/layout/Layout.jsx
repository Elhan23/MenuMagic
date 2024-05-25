import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./base/Header/Header";
import Footer from "./base/Footer/Footer";

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
