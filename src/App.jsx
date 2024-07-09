import React, { useState, useRef, useCallback } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import useLenis from "./hooks/UseLennis";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  useLenis();
  const pageContentRef = useRef(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = useCallback(() => {
    setOpenSidebar((prevState) => !prevState);
  }, []);

  return (
    <>
      <Navbar
        pageContentRef={pageContentRef}
        handleSidebar={handleSidebar}
        openSidebar={openSidebar}
      />
      <Sidebar handleSidebar={handleSidebar} openSidebar={openSidebar} />
      <Outlet context={{ pageContentRef, openSidebar, handleSidebar }} />
      <Footer />
    </>
  );
};

export default React.memo(App);
