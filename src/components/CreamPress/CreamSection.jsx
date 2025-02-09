import React from "react";
import "./CreamSection.css";

const CreamSection = ({ data, currPage }) => {
  return (
    <section className="cream fc">
      <div className="container">
        {!currPage ? (
          <h2 className="Headerh3">
            We Are <i>Here</i> For You.
          </h2>
        ) : (
          <p className="headerp">News, Articles, Publications.</p>
        )}
        <p className="greytext sP">few of our projects</p>
        <ul className="cream-card-container">
          {data.map((card, index) => (
            <li key={index}>
              <div className="cream-cardimg-container">
                <img
                  className="cream-cardimg"
                  src={card.imgSrc}
                  alt={card.title}
                  loading="lazy"    
                  data-src={card.imgSrc}
                  height="340"
                  data-ll-status="loaded"
                />
              </div>
              <div className="cream-card-content">
                <h3 className="headerp name">{card.title}</h3>
                <div className="flexSb">
                  <p className="sP job-title">
                    {card.date ? card.date : card.location}
                  </p>
                </div>
                <div className="flex small-btn-container">
                  <button className="common-btn-style cream-btn small-btn">
                    View {card.location ? "Project" : "Publication"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default React.memo(CreamSection);
