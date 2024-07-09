import React from "react";
import HeroSection from "./HeroSection";

const Hero = () => {
  return (
    <section>
      <HeroSection />
    </section>
  );
};

export default React.memo(Hero);
