import React from "react";
import Hero from "../components/hero/Hero";
import Main from "../components/Main/Main";
import Hero2 from "../components/hero2/Hero2";
import CreamSection from "../components/CreamPress/CreamSection";
import Wwd from "../components/wwd/Wwd";
import HeroPress from "../components/Press/HeroPress";
import { useOutletContext } from "react-router-dom";
import cardData from "../TeamData/CardData";

const HomePage = () => {
  const { pageContentRef } = useOutletContext();

  return (
    <div className="flexPage">
      <Hero />
      <div className="page-content" ref={pageContentRef}>
        <Main />
        <HeroPress />
        <Wwd />
      </div>
      <Hero2 />
      <CreamSection data={cardData} />
      <section className="all-work">
        <div>
          {/* <h2 className="headerh1">Have a question, Want to work with us?</h2> */}
        </div>
        <h1 className="headerh2">All Discipline</h1>
        <ul className="al-ul">
          <li className="sP">Architecture</li>
          <li className="sP">visual Consultancy</li>

          <li className="sP">Design & Build</li>

          <li className="sP">Interior Design</li>
          <li className="sP">Landscape Architecture</li>
          <li className="sP">Urban Design</li>
        </ul>
      </section>
    </div>
  );
};

export default React.memo(HomePage);
