import React from "react";
import TinyDiv from "../Util/tinyDiv/TinyDiv";
import award from '../../img/award.webp';

const PressHero = () => {
  return (
    <>
      <div className="hero2">
        <section className="hero2-img press-hero-img" loading="lazy"></section>
        <div className="overlay-base pressHeroOverlay">
          <div className="hero-caption">
            <div className="hero-headtextt">
              <span className="headerp">featured</span>
              <h1 className="flexCenter whiteColor">
                <span>—</span> Oshinowo Studio
              </h1>
            </div>
            <div className=" cream-card-container small-btn-container">
              <button className=" common-btn-style cream-btn phb">
                View All Publications
              </button>
              <button className=" common-btn-style cream-btn phb">
                Media Contact
              </button>
              <button className=" common-btn-style cream-btn phb">
                View All Awards
              </button>
            </div>
          </div>
          <div>
            <span className="fC showmobile">+40 Publications.</span>
          </div>
          <div className="smallestp hero2-overlay-inner">
            <span className="showmobile"> - VIEW AWARD</span>
            <div className="badge">
              <TinyDiv
                link="https://monocle.com/radio/shows/monocle-on-design/619/tosin-oshinowo/"
                imageUrl={award}
                name="WINNER"
                jobTitle="Monocle Design Awards 2024."
              />
            </div>
          </div>
        </div>
        <p className="job-title imgCopyrigt showmobile">News & Announcements®.</p>
      </div>
    </>
  );
};

export default PressHero;
