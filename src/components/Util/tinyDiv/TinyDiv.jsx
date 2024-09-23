import React from "react";
import PropTypes from "prop-types";
import "./TinyDiv.css";

const TinyDiv = ({ target = "_self", link, imageUrl, name, jobTitle, className }) => {
  return (
    <div className={`author-box fade-in ${className}`}>
      <a target={target} href={link} className="author-box-inner">
        <div className="author-image">
          <img
            className={`overlay lazy ${className ? "googleimg" : ""}`}
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="author-content">
          <h4 className="name">{name}</h4>
          <div className="job-title">{jobTitle}</div>
        </div>
      </a>
    </div>
  );
};

TinyDiv.propTypes = {
  target: PropTypes.string,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
};

export default TinyDiv;
