import React from "react";
import CreamSection from "../components/CreamPress/CreamSection";
import PressData from "../TeamData/PressData";
import PressHero from "../components/PressHeroSection/PressHero";

const Press = () => {
  return (
    <div className="flexPage">
      <PressHero />
      <CreamSection data={PressData} currPage={"page"} />
    </div>
  );
};

export default Press;
