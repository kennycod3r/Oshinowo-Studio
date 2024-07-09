import React from "react";
import PropTypes from "prop-types";
import "./ExhibitionCard.css";

const ExhibitionCard = ({ title, location, date, imageUrl, link, cat }) => {
  return (
    <a href={link} className="ex-card-con">
      <div className="card-content">
        <div className="titleH">
          <div>
            <p>{title}</p>
          </div>
          <p>{location} {date}</p>
        </div>
      </div>
      <div className="ex-card-con-image">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`${title}`}
          className="ex-card-con-image"
        />
      </div>
    </a>
  );
};

ExhibitionCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string,
  cat: PropTypes.string.isRequired,
};

ExhibitionCard.defaultProps = {
  link: "#",
};

export default ExhibitionCard;
