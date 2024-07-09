import React from "react";
import "./Press.css";
import ArrowLink from "../ArrowLink";
import BodyLink from "../Util/BodyLink";
import newspaper1 from "../../img/newspaper1.png";
import newspaper2 from "../../img/newspaper2.jpg";

const HeroPress = () => {
  const pressData = [
    {
      id: 1,
      title: "What African architecture can teach the world",
      date: "25 March 2024",
      author: "By Ijeoma Ndukwe, BBC News",
      imgSrc: newspaper1,
    },
    {
      id: 2,
      title: "What African architecture can teach the world",
      date: "25 March 2024",
      author: "By Ijeoma Ndukwe, BBC News",
      imgSrc: newspaper2,
    },
  ];

  return (
    <div className="press-page">
      <h3 className="Headerh3">Press</h3>
      <section className="doublegrid press-doublegrid">
        {pressData.map((item, index) => (
          <div key={item.id} className="doublegrid text-container">
            <div className="news-description">
              <span className="number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="headerh3">{item.title}</h4>
                <p className="job-title smallp">{item.date}</p>
                <p className="headerp">{item.author}</p>
              </div>
            </div>
            <div className="outer-image-container fC">
              <div
                className="image-container"
                style={{ backgroundImage: `url(${item.imgSrc})` }}
                role="img"
                aria-label={item.title}
              >
                <div className="overlay-base r-overlay">
                  <div className="flexCenter">
                    <ArrowLink />
                    <span className="headerp"> view publication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <BodyLink navLink={"/Press"} linkText={"View more Articles"} />
    </div>
  );
};

export default HeroPress;
