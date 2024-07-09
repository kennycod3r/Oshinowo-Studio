import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Main = () => {
  return (
    <main className="doulegrid">
      <div className="white-dot">.</div>
      <div className="main-grid-2">
        <article className="smallp">
          An Architectural Firm with a diverse international portfolio features individual homes,
          pavilions, commercial and cultural spaces, community housing, and
          large-scale humanitarian projects. We are dedicated to human-centered
          design that addresses cultural and climatic needs. Our work
          fundamentally aims to enhance how people live. By incorporating
          traditional crafts and materials from West Africa and beyond, our
          designs are both intuitive and sustainable.
        </article>
        <div className="body-link">
          <Link className="grey-text number" to="/AboutUs">
            <span>Explore More </span>—ABOUT US
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
