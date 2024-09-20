import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Util/Logo";
import HamburgerMenu from "../Hamburger/HamburgerMenu";

const Navbar = ({ handleSidebar, openSidebar }) => {
  const location = useLocation();

  const isHomeOrPressPage = location.pathname === "/" || location.pathname === "/Press" || location.pathname === "/ContactPage";

  const navbarStyle = isHomeOrPressPage
    ? { backgroundColor: "transparent" }
    : {
        backgroundColor: "white",
        borderBottom: "0.5px solid rgb(203, 203, 203)",
        color: "#181818",
      };

  const linkStyle = isHomeOrPressPage ? "white" : "black";

  return (
    <nav className="static-nav" style={navbarStyle}>
      <Link to="/">
        <div className="logo-text">
          <Logo white={isHomeOrPressPage ? true : false} />
        </div>
      </Link>

      <div className="nav-links-with-menu flexSb">
        <ul className="nav-links showmobile fC">
          {["AboutUs", "Projects", "Press"].map((link) => (
            <li className="nav-linkbox" key={link}>
              <Link
                to={`/${link}`}
                className="nav-link headerp name"
                style={{ color: linkStyle }}
                data-text={link}
              >
                {link.replace(/([A-Z])/g, " $1").trim()}
              </Link>
            </li>
          ))}
          <li className="nav-linkbox">
            <Link
              to="/ContactPage"
              className="nav-link headerp name"
              style={{ color: linkStyle }}
              data-text="ContactUs"
              
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="fixed-ham fC">
          <HamburgerMenu
            handleSidebar={handleSidebar}
            openSidebar={openSidebar}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
