import React from "react";
import Hero from "../components/hero/Hero";
import Main from "../components/Main/Main";
import Hero2 from "../components/hero2/Hero2";
import Overview from "../components/overview/Overview";
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
      <Overview />
    </div>
  );
};

export default React.memo(HomePage);

