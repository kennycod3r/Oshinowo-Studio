import React from "react";
import "./Sidebar.css";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import CloseSvg from "../Util/CloseSvg";
import menusvg from "../assets/menusvg.svg";

const Sidebar = ({ openSidebar, handleSidebar }) => {
  const sideBar = document.getElementById("sideBar");
  const location = useLocation();

  if (!sideBar) return null;

  const isActive = (path) => location.pathname === path;

  return createPortal(
    <div className={`main-sidebar ${openSidebar ? "open" : ""}`}>
      <div className="inner-main-sidebar">
      <div className="menu-circles">
      <img 
        alt="menu-svg" 
        loading="lazy" 
        width="245" 
        height="327" 
        decoding="async" 
        className="w-72 2xl:w-96" 
        src={menusvg}
        style={{ color: "transparent" }} 
      />
    </div>
        <div className="close-btn-circle-sidebar" onClick={handleSidebar}>
          <CloseSvg isOpen={openSidebar} />
        </div>
        <ul>
          <li className="navigation-sidelink">
            <Link
              to="/"
              className={`sidebar-link ${isActive("/") ? "active" : ""}`}
              data-text="Home"
              onClick={handleSidebar}
            >
              <div>
                <h3 className="mP">HOME</h3>
              </div>
              <div className={`dot ${isActive("/") ? "active" : ""}`}></div>
            </Link>
          </li>
          <li className="navigation-sidelink">
            <Link
              to="/AboutUs"
              className={`sidebar-link ${isActive("/AboutUs") ? "active" : ""}`}
              onClick={handleSidebar}
            >
              <div>
                <h3 className="mP">ABOUT US</h3>
              </div>
              <div
                className={`dot ${isActive("/AboutUs") ? "active" : ""}`}
              ></div>
            </Link>
          </li>
          <li className="navigation-sidelink">
            <Link
              to="/Projects"
              className={`sidebar-link ${
                isActive("/Projects") ? "active" : ""
              }`}
              onClick={handleSidebar}
            >
              <div>
                <h3 className="mP">PROJECTS</h3>
              </div>
              <div
                className={`dot ${isActive("/Projects") ? "active" : ""}`}
              ></div>
            </Link>
          </li>
          <li className="navigation-sidelink">
            <Link
              to="/Press"
              className={`sidebar-link ${isActive("/Press") ? "active" : ""}`}
              onClick={handleSidebar}
            >
              <div>
                <h3 className="mP">PRESS</h3>
              </div>
              <div
                className={`dot ${isActive("/Press") ? "active" : ""}`}
              ></div>
            </Link>
          </li>
          <li className="navigation-sidelink">
            <Link
              to="/ContactPage"
              className={`sidebar-link ${
                isActive("/ContactPage") ? "active" : ""
              }`}
              onClick={handleSidebar}
            >
              <div>
                <h3 className="mP">CONTACT US</h3>
              </div>
              <div
                className={`dot ${isActive("/ContactPage") ? "active" : ""}`}
              ></div>
            </Link>
          </li>
        </ul>
        <div className="semi-circle">
          <div className="bottom-links">
            <div>EMAIL</div>
            <div>LINKEDIN</div>
            <div>INSTAGRAM</div>
          </div>
        </div>
      </div>
    </div>,
    sideBar
  );
};

export default Sidebar;
