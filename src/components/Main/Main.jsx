import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../App.css";
import housesbg from "../../img/backhouses.png";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  useEffect(() => {
    // Animate house image (opacity only, no rotation)
    gsap.to(".housebg", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: ".housebg",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animate BLACKNAV (shrink and scale on scroll)
    gsap.fromTo(
      ".fancy-text",
      { scale: 0.5, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".blackNav-wrapper",
          start: "top 80%", // start earlier
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="threeD-houses-section">
      <div className="threeD-houses">
        <img
          alt="menu-svg"
          loading="lazy"
          decoding="async"
          className="housebg"
          src={housesbg}
          style={{ width: "100vw", minHeight: "70vh", color: "transparent" }}
        />
      </div>
      <main className="main-card">
        <div className="white-dot">.</div>
        <div className="main-grid-2">
          <article className="sP">
            An Architectural Firm with a diverse international portfolio
            features individual homes, pavilions, commercial and cultural
            spaces, community housing, and large-scale humanitarian projects. We
            are dedicated to human-centered design that addresses cultural and
            climatic needs. Our work fundamentally aims to enhance how people
            live. By incorporating traditional crafts and materials from West
            Africa and beyond, our designs are both intuitive and sustainable.
          </article>
          <div className="body-link">
            <Link className="grey-text number" to="/AboutUs">
              <span>Explore More </span>—ABOUT US ↗
            </Link>
          </div>
        </div>
      </main>
      <div>
        <p className="sP fancy-text">
          "Talk to someone who truly understands your vision and architectural
          needs. Make meaningful progress and feel empowered with expert
          guidance from our team. Get professional advice and discover smarter,
          more streamlined solutions for bringing your architectural projects to
          life—all in one place."
        </p>
      </div>
      <div className="blackNav-wrapper fC">
        
        <p className="fC bnLocation">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
              stroke="#fff"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
              stroke="#fff"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>

          <span className="sP">locate us</span>
        </p>
      </div>
    </section>
  );
};

export default Main;
