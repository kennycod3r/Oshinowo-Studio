import React from "react";
import "./AboutUs.css";
import Pen from "../../components/assets/pencil.svg";
import digger from "../../components/assets/digger.svg";
import crane from "../../components/assets/crane.svg";

const Aublacksection = ({ expand }) => {
  return (
    <section
      className="au-blacksection"
      style={expand ? { display: "none" } : { alignItems: "center" }}
    >
      <div className="au-blacksection-container">
        <div>
          <p className="headerh3">Architecture</p>
          <span>
            <img className="svg" src={Pen} alt="Pencil icon" />
          </span>
          <p className={expand ? "none" : ""}>
            As architects, we are passionate about the role of design to improve
            the quality of life. We design places for all of life’s activities.
            So far, we have been able to demonstrate through our projects an
            ability to capture experience and space.
          </p>
        </div>
        <div>
          <p className="headerh3">Interior Architecture</p>
          <span>
            <img className="svg" src={Pen} alt="Pencil icon" />
          </span>
          <p className={expand ? "none" : ""}>
            As interior architects, we see each client and project as a unique
            challenge to us and we ensure the resulting environments are
            exceptional and appropriate. Our objective is to deliver projects
            that surpass our client’s aspirations.
          </p>
        </div>
        <div>
          <p className="headerh3">Design & Build</p>
          <span>
            <img className="svg" src={Pen} alt="Pencil icon" />
          </span>
          <p className={expand ? "none" : ""}>
            We see design and build as a creative discipline. We don’t
            copy/paste; our solutions are developed through a continual process
            of questioning. By doing so we protect ourselves from complacency
            and approach every project attentively and inquisitively.
          </p>
        </div>
        <div>
          <p className="headerh3">Space Planning</p>
          <span>
            <img className="svg" src={crane} alt="Crane icon" />
          </span>
          <p className={expand ? "none" : ""}>
            We bring visionary places, spaces, and ideas to life. Because
            without context, vision is just a dream. We love to give shape,
            context, and reality to the most inspiring projects.
          </p>
        </div>
        <div>
          <p className="headerh3">Project Management</p>
          <span>
            <img className="svg" src={digger} alt="Digger icon" />
          </span>
          <p className={expand ? "none" : ""}>
            We are proactive in anticipating and solving challenges. We look to
            apply technology to refine design, increase efficiency, and improve
            buildability. So if you have your design thought out and need a team
            on site to handle things, we offer project management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aublacksection;
