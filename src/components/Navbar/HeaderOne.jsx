import React, { useState, useCallback } from "react";
import './Navbar.css';


const HeaderOne = React.memo(() => {
  const [show, setShow] = useState(true);

  const handleToggle = useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  return (
    <div className={show ? "flexCenter promo-nav" : "hide"}>
      <p className="tinyp">
        BLACK FRIDAY SALE. 50% <span>OFF OF ALL SELECTED ITEMS</span>
      </p>
      <div className="x" onClick={handleToggle}>
        x
      </div>
    </div>
  );
});

export default HeaderOne;
