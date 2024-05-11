import React from "react";
import Layout from "../layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "../pages/Registration/Registration";
import HomeMenu from "../pages/HomeMenu/HomeMenu";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Menu from "../pages/Menu/Menu";
import Chef from "../pages/Chef/Chef";
import Shop from '../pages/Shop/Shop';

function AppRouter() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/aboutmenu" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Layout>
    </>
  );
}

export default AppRouter;
