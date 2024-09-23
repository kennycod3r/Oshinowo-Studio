import React from "react";
import "./Hero2.css";
import ArrowLink from "../ArrowLink";
import TinyDiv from "../Util/tinyDiv/TinyDiv";
import google from "../assets/google.svg";
import star from "../assets/star.svg";
import studioImg from "../../img/studio.jpg";
import ceoImg from '../../img/ceo.webp';

const Hero2 = ({ about }) => {
  const mainHeroImg =
    "https://www.oshinowostudio.com/wp-content/uploads/2024/05/Tosin-Oshinowo-portrait-4-photo-by-Spark-Creative-2048x1352.png";

  return (
    <div className="hero2">
      <section
        className="hero2-img"
        style={{
          backgroundImage: !about ? `url(${mainHeroImg})` : `url(${studioImg})`,
        }}
        loading="lazy"
      ></section>

      <div className="overlay-base hero2-overlay">
        <div className="au-hero-text fC">
          <span className="flexCenter showmobile">
            {about ? "/" : <ArrowLink />}
            About Us.
          </span>
          <h2 className="headerh2">
            {about
              ? "Our clients leave with clear and fruitful outcomes."
              : "Let's create a future together."}
          </h2>
        </div>
        <div className="smallestp hero2-overlay-inner">
          {about && (
            <TinyDiv
              className="au-hero-tag"
              link="https://www.google.com.ng/search?q=oshinowo+studio"
              imageUrl={google}
              name="Google reviews"
              target="_blank"
              jobTitle={
                <div className="fC">
                  <img className="star" src={star} alt="Star rating" />
                  <img className="star" src={star} alt="Star rating" />
                  <img className="star" src={star} alt="Star rating" />
                  <img className="star" src={star} alt="Star rating" />
                  <span className="job-title number">4.9/5</span>
                </div>
              }
            />
          )}
          <span className="showmobile"> VIEW EXPERTISE</span>
          <div className="badge">
            <TinyDiv
              link="/AboutUs/Tosin%20Oshinowo"
              imageUrl={ceoImg}
              name="Tosin Oshinowo"
              jobTitle="CFP® Professional Architect."
            />
          </div>
        </div>
      </div>
      <p className="job-title imgCopyrigt sP">oshinowostudio Lagos, Nigeria®.</p>
    </div>
  );
};

export default Hero2;
