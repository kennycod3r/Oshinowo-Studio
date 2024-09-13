import React from "react";
import { Link } from "react-router-dom";
import ArrowLink from "../ArrowLink";

const BodyLink = ({navLink, linkText}) => {
  return (
    <div className="body-link">
      <Link className="flexCenter" to={navLink}>
        <ArrowLink black={"black"} />
        <p className="headerp grey-text">{linkText} ?</p>
      </Link>
    </div>
  );
};

export default BodyLink;
