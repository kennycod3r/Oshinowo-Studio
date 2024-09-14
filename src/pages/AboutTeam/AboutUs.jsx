import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import TeamData from "../../TeamData/TeamData";
import ArrowCircle from "../../components/Util/arrowCircle/ArrowCircle";
import Aublacksection from "./Aublacksection";
import Hero2 from "../../components/hero2/Hero2";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <div className="au-hero">
        <Hero2 about={true} />
      </div>
      <section className="About-team">
        <Aublacksection expand={isExpanded} />
        <section className={`About-section ${isExpanded ? "expanded" : ""}`}>
          <button
            onClick={handleExpandToggle}
            style={{
              transform: isExpanded ? "rotate(-90deg)" : "rotate(90deg)",
            }}
            className="expand-button"
          >
            <ArrowCircle />
          </button>
          <div className="aboutus-headtext flexSb">
            <div className="hero-headtextt">
              <p className="headerp">Our expert team at</p>
              <h1 className="headerh1">Oshinowo Studio</h1>
              <p className="job-title sP">here to assist you.</p>
            </div>
            <div>
              <p className="job-title sP">scroll down</p>
              <ArrowCircle />
            </div>
          </div>
          <div className="container">
            <div className="row">
              {TeamData.map((member, index) => (
                <div key={member.name} className="grid-item" id={`member-${index}`}>
                  <Link to={`/AboutUs/${member.name}`} className="grid-item-link">
                    <div className="team-image">
                      <img
                        className="overlay thumbnail lazy"
                        src={member.imageUrl}
                        alt={member.name}
                      />
                      {member.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="common-btn-style grid-item-tag">
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="col-content">
                      <h3 className="headerh3">{member.name}</h3>
                      <p className="job-title">{member.role}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
