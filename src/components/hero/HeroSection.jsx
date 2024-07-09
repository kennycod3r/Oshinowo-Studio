import React from "react";
import "./Hero.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import is1 from "../../img/slide-img1.webp";
import is2 from "../../img/slide-img3.webp";
import is3 from "../../img/slide-img2.webp";
import Arrow from "../assets/arrowDown.svg";

const slideImages = [{ url: is1 }, { url: is2 }, { url: "//www.oshinowostudio.com/wp-content/uploads/2023/05/Lantern-house_interior-3-scaled.jpg" }];

const HeroSection = () => {
  return (
    <div className="hero-container fC">
      <div className="overlay-base hero-overlay">
        <div className="hero-caption">
          <div className="hero-headtextt">
            <p className="headerp smallp whiteColor">We are</p>
            <h1>Oshinowo Studio</h1>
            <div className="arrowdiv showmobile">
              <img className="arrowsvg" alt="arrow" src={Arrow} />
            </div>
            <div className="oshin-container">
              <p className="headerp smallp whiteColor">
                <span>—</span> an internationally engaged architectural design
                studio,
              </p>
              <p className="whiteColor headerp"> rooted in Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="hero-slide fC">
              <div
                className="hero-img-div"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="view-hero-header">
        <div className="explore-text">
          <p>01 - 04</p>
        </div>
        <div className="view-hero-header-details">
          <p>
            CALL <span className="hidemobile">FOR AIRPORT PICKUP</span>
          </p>
          <p>
            BUSINESS <span className="hidemobile">OR PROJECT PLANNING</span>
          </p>
          <p>SERVICES</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
