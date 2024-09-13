import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-to-top">
      <button onClick={scrollToTop} className="btn-reg back-to-top-button">
        <span>back to top</span> <span>↑</span>
      </button>
    </div>
  );
};

export default BackToTop;
