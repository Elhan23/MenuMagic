import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMenu from "./pages/HomeMenu/HomeMenu";
import Registration  from "./pages/Registration/Registration";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Chef from "./pages/Chef/Chef";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeMenu />} />
        <Route path="/registration" element={< Registration/>} />
        <Route path="/aboutmenu" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/chef" element={<Chef/>} />
      </Routes>
    </Layout>
  ); 
}

export default App;
