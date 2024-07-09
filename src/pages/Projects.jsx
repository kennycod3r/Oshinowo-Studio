import React, { useState } from "react";
import "./Pages.css";
import ExhibitionCard from "../components/ExhibitionCard/ExhibitionCard";

const Projects = () => {
  // Mock data for exhibitions (replace with actual data from API or state management)
  const exhibitionsData = [
    {
      id: 1,
      title: "Adidas Flagship Store",
      location: "Lagos, Ng",
      date: "2023",
      cat: "commercial",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2024/02/Oshinowo-Studio_CMD-Atelier_Adidas-Store_10-scaled-1.jpg",
    },
    {
      id: 2,
      title: "Iconic House",
      location: "Virtual",
      cat: "residential",
      date: "2022",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2023/10/AD-Hero-Image-Header.png",
    },
    {
      id: 3,
      title: "Lantern House",
      location: "Lagos, Ng",
      cat: "residential",
      date: "2022",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2024/02/Lantern-house_exterior-2-2048x1434-1.jpg",
    },
    {
      id: 4,
      title: "Ngarannam",
      location: "Borno",
      cat: "creative",
      date: "2022",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2022/11/UNDP_Project_Ngarannam_B-2_16.jpg",
    },
    {
      id: 5,
      title: "Coral Pavilion",
      location: "Lagos, Ng",
      cat: "resort",
      date: "2022",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2022/05/CORAL-PAV.-1.jpg",
    },
    {
      id: 6,
      title: "Foworale-house",
      location: "Lagos, Ng",
      cat: "resort",
      date: "2017",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2020/09/IMG_0095.jpeg",
    },
    {
      id: 7,
      title: "Sencillo-beach-house",
      location: "Lagos, Ng",
      cat: "resort",
      date: "2018",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2019/04/190217_SENCILLO9.jpg",
    },
    {
      id: 8,
      title: "Maryland Mall",
      location: "Lagos, Ng",
      cat: "commercial",
      date: "2016",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2018/12/Maryland-Mall-2.jpg",
    },
    {
      id: 9,
      title: "Bhai Temple",
      location: "Kinshasa",
      cat: "creative",
      date: "2019",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2019/05/BAHAI-TEMPLE-1.jpg",
    },
    {
      id: 10,
      title: "Rensource",
      location: "Lagos, Ng",
      cat: "commercial",
      date: "2019",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2019/04/RENSOURCE-ENERGY4.jpg",
    },
    {
      id: 11,
      title: "Plum-apartments",
      location: "Lagos, Ng",
      cat: "residential",
      date: "2017",
      imageUrl:
        "https://www.oshinowostudio.com/wp-content/uploads/2019/03/PLUM-1.jpg",
    },
    // Add more exhibition objects as needed
  ];

  const [navigation, setNavigation] = useState("All");

  // Filter exhibitions based on navigation state
  const filteredExhibitions = exhibitionsData.filter((exhibition) => {
    return navigation === "All" || exhibition.cat === navigation;
  });

  // Render exhibition cards in a grid layout
  const renderExhibitionCards = () => {
    return filteredExhibitions.map((exhibition) => (
      <ExhibitionCard
        key={exhibition.id}
        title={exhibition.title}
        location={exhibition.location}
        date={exhibition.date}
        imageUrl={exhibition.imageUrl}
        cat={exhibition.cat}
        link="#"
      />
    ));
  };

  return (
    <div className="exhibitions-section">
      <div className="exhibition-nav doublegrid">
        <div>
          <h2 className="headerh2">Exhibitions</h2>
        </div>
        <div className="exhibition-nav-main">
          <ul className="sB">
            {["All", "commercial", "residential", "creative", "resort"].map(
              (cat) => (
                <li key={cat}>
                  <button
                    className={`headerp project-btn ${
                      navigation === cat ? "active" : ""
                    }`}
                    onClick={() => setNavigation(cat)}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="project-category-section">{renderExhibitionCards()}</div>
    </div>
  );
};

export default Projects;
