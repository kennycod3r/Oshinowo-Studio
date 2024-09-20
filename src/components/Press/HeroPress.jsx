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
      link: "https://www.bbc.com/news/world-africa-68622504",
    },
    {
      id: 2,
      title: "“The Beauty of Impermanence: An Architecture of Adaptability”",
      date: "November 11, 2023 - March 10, 2024",
      author: "Nick Axel",
      imgSrc: newspaper2,
      link: "https://www.e-flux.com/criticism/579307/2nd-sharjah-architecture-triennial-the-beauty-of-impermanence-an-architecture-of-adaptability",
    },
  ];

  return (
    <div className="press-page">
      <h3 className="Headerh3">Press</h3>
      <p className="sP greytext">Publications And Recent Articles</p>
      <section className="doublegrid press-doublegrid">
        {pressData.map((item, index) => (
          <div key={item.id} className="doublegrid text-container">
            <div className="news-description">
              <span className="number showmobile">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="news-stuff">
                <h4 className="headerh3">{item.title}</h4>
                <div className="date-author">
                  <p className="job-title sP">{item.date}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="headerp"
                    title={item.author}
                  >
                    {item.author}
                  </a>
                </div>
              </div>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
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
                      <span className="headerp">view publication</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
      <BodyLink navLink={"/Press"} linkText={"View more Articles"} />
    </div>
  );
};

export default HeroPress;
