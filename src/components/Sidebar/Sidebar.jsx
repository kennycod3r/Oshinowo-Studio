import React, { useMemo } from "react";
import "./Sidebar.css";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import CloseSvg from "../Util/CloseSvg";

const Sidebar = ({ openSidebar, handleSidebar }) => {
  const sideBar = document.getElementById("sideBar");
  const location = useLocation();

  if (!sideBar) return null;

  const isActive = useMemo(
    () => (path) => location.pathname === path,
    [location.pathname]
  );

  return createPortal(
    <div className={`main-sidebar ${openSidebar ? "open" : ""}`}>
      <div className="inner-main-sidebar">
        <div className="close-btn-circle-sidebar" onClick={handleSidebar}>
          <CloseSvg isOpen={openSidebar} />
        </div>
        <nav className="fixed-nav-inner2">
          <div className="nav-row">
            <h5 className="headerh3 greycolor2">Navigation</h5>
            <div className="stripe"></div>
            <ul>
              {["/", "/AboutUs", "/Projects", "/Press", "/ContactPage"].map(
                (path, index) => (
                  <li className="navigation-sidelink" key={index}>
                    <Link
                      to={path}
                      className={`sidebar-link ${
                        isActive(path) ? "active" : ""
                      }`}
                      onClick={handleSidebar}
                      aria-label={path.slice(1) || "Home"}
                    >
                      <div>
                        <h3 className="mP">
                          {path.slice(1).toUpperCase() || "HOME"}
                        </h3>
                      </div>
                      <div
                        className={`dot ${isActive(path) ? "active" : ""}`}
                      ></div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="nav-row social-row">
            <div className="socials">
              <ul className="socials-list">
                {[
                  { name: "Awards", link: "https://www.awwwards.com" },
                  { name: "Instagram", link: "https://www.instagram.com/oshinowo.studio/" },
                  { name: "LinkedIn", link: "https://www.linkedin.com/company/oshinowo-studio/" },
                ].map((social, index) => (
                  <li className="btn btn-link btn-link-external" key={index}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-strength="20"
                      data-strength-text="10"
                    >
                      <span className="btn-text">
                        <span className="btn-text-inner sP underline">{social.name}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>,
    sideBar
  );
};

export default Sidebar;
