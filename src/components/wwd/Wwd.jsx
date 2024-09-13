import React from "react";
import { useInView } from "react-intersection-observer";
import "./Wwd.css";
import BodyLink from "../Util/BodyLink";

const Wwd = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });

  const renderCard = (ref, inView, index) => (
    <div ref={ref} className={`wwd-card ${inView ? "visible" : ""}`}>
      <div className="wwd-img-con">
        <span>0{index + 1}</span>
      </div>
    </div>
  );

  return (
    <div className="wwd">
      <div className="wwd-head-des">
        <h3 className="Headerh3">What We Do</h3>
      </div>
      <div className="wwd-container doublegrid">
        <div className="wwd-row">
          {renderCard(ref1, inView1, 0)}
          {renderCard(ref2, inView2, 1)}
        </div>
        <div ref={ref3} className={`wwd-textbox ${inView3 ? "visible" : ""}`}>
          <h2 className="headerh2">Architecture</h2>
          <p className="sP">
            As architects, we are passionate about the role of design to improve
            the quality of life. We design places for all of life's activities.
            So far, we have been able to demonstrate through our projects an
            ability to capture experience and space.
          </p>
        </div>
      </div>
      <div className="doublegrid wwd-textbox-small">
        <div ref={ref4} className={`fI1 ${inView4 ? "visible" : ""}`}>
          <p className="headerh3 fI1-header">Interior Architecture</p>
          <p className="sP">
            As interior architects, we see each client and project as a unique
            challenge to us and we ensure the resulting environments are
            exceptional and appropriate. Our objective is to deliver projects
            that surpass our client's aspirations.
          </p>
        </div>
        <div ref={ref5} className={`fI1 ${inView5 ? "visible" : ""}`}>
          <p className="headerh3 fI1-header">Design & Build</p>
          <p className="sP">
            We see design and build as a creative discipline. We don't
            copy/paste; our solutions are developed through a continual process
            of questioning. By doing so we protect ourselves from complacency
            and approach every project attentively and inquisitively.
          </p>
        </div>
      </div>
      <BodyLink navLink={"/AboutUs"} linkText={"Explore Expertise"} />
    </div>
  );
};

export default Wwd;
