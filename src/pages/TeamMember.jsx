import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Pages.css";
import CreamSection from "../components/CreamPress/CreamSection";
import Chair2 from "../img/chair2.jpg";
import Chair3 from "../img/chair3.jpg";
import columnSvg from "../components/assets/columnSvg.svg";

const teamMembers = [
  {
    name: "Tosin Oshinowo",
    role: "FOUNDER/DIRECTOR",
    imageUrl:
      "https://d2kq0urxkarztv.cloudfront.net/5b0d9cb140d95a6ade291a1e/4613386/image-f974aeea-0a02-4b09-9ad9-cc204a6167a8.jpg?w=486&e=webp&cX=0&cY=30&cW=1600&cH=2169.2883895131085",
    tags: ["Architect"],
    link: "1",
  },
  {
    name: "Dennis Reijnders",
    role: "Partner & Lawyer",
    imageUrl:
      "https://avvr.nl/media/pages/team/dennis-reijnders/5caa929652-1672944840/wndrlst-dennis-2023-v1-810x1080-crop-q72.jpg",
    tags: ["Property"],
    link: "https://avvr.nl/team/dennis-reijnders",
  },
  {
    name: "Diederick van Dalen",
    role: "Partner & Lawyer",
    imageUrl:
      "https://avvr.nl/media/pages/team/diederick-van-dalen/96a641c271-1672944833/wndrlst-diederick-2023-v1-810x1080-crop-q72.jpg",
    tags: ["Enterprises"],
    link: "https://avvr.nl/team/diederick-van-dalen",
  },
  {
    name: "Harke Plas",
    role: "Partner & Lawyer",
    imageUrl:
      "https://avvr.nl/media/pages/team/harke-plas/a294a88422-1672944825/wndrlst-harke-2023-v1-810x1080-crop-q72.jpg",
    tags: ["Enterprises"],
    link: "https://avvr.nl/team/harke-plas",
  },
  {
    name: "JanJacob Bijkerk",
    role: "Of counsel",
    imageUrl:
      "https://avvr.nl/media/pages/team/janjacob-bijkerk/c4a207af2b-1699369054/jacob2-1-810x1080-crop-q72.jpg",
    tags: ["Property"],
    link: "https://avvr.nl/team/janjacob-bijkerk",
  },
  {
    name: "Julian van der Louw",
    role: "Lawyer",
    imageUrl:
      "https://avvr.nl/media/pages/team/julian-van-der-louw/a5ef108d8d-1699367461/julian-1-1-810x1080-crop-q72.jpg",
    tags: ["Property"],
    link: "https://avvr.nl/team/julian-van-der-louw",
  },
  {
    name: "Kim Meekes",
    role: "Lawyer",
    imageUrl:
      "https://avvr.nl/media/pages/team/kim-meekes/b5d6e160e4-1675689294/kim-810x1080-crop-q72.jpg",
    tags: ["Enterprises"],
    link: "https://avvr.nl/team/kim-meekes",
  },
  {
    name: "Lies van Dooren",
    role: "Lawyer",
    imageUrl:
      "https://avvr.nl/media/pages/team/lies-van-dooren/0111bf0da8-1675688897/lies-van-dooren-avvr-2-810x1080-crop-q72.jpg",
    tags: ["Property"],
    link: "https://avvr.nl/team/lies-van-dooren",
  },
  // Add other team members...
];

const selectedWritings = [
  {
    title: "Field Notes on Scarcity",
    date: "2023",
    location: "A Pathway Forward – essay",
    imgSrc: "https://press.uchicago.edu/.imaging/mte/ucp/medium/dam/ucp/books/jacket/978/30/38/60/9783038603573.jpg/jcr:content/9783038603573.jpg", // Add the correct path
  },
  {
    title: "The Laboratory of the Future",
    date: "2023",
    location: "Venice Biennial 2023 Exhibition catalogue Conditions of Scarcity – essay",
    imgSrc: "https://images.unsplash.com/photo-1522050212171-61b01dd24579?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFyY2hpdGVjdHVyZSUyMGhvdXNlfGVufDB8fDB8fHww", // Add the correct path
  },
  
  {
    title:"Harvard Design Magazine",
    date: "F/W 2023",
    location: "Do you see this emerging model changing the space of curatorial practice in design and if so how? – Contributor",
    imgSrc: "https://www.harvarddesignmagazine.org/wp-content/uploads/2023/08/51Cover_920px-wide-1.jpg",
  },
  {
    title: " Expansions: responses to how we live  Shaping site and forming community: Reflections on the second Lagos Biennial of Contemporary Art – essay",
    date: "2021",
    location: "Venice Biennial 2021 publication, Expansions: responses to how we live",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677851401i/59079381.jpg",
  },
  {
    title: "What architects can learn from Lagos essay",
    date: "2023",
    location: "The Monocle Companion: Fifty essays for a Brighter Future",
    imgSrc: "https://img.monocle.com/product/companion2_on-grey-639b5bd5e7d66.jpg?w=800&h=1067&g=center&q=75&dpr=2",
  },
];


const MemberImages = ({ imageUrl }) => (
  <div>
    <div className="team-member-imagecon doublegrid">
      <div>
        <img className="team-member-image" src={imageUrl} alt="Member" />
      </div>
      <div>
        <img className="team-member-image" src={imageUrl} alt="Member" />
      </div>
    </div>
    <MemberQualifications />
  </div>
);

const MemberQualifications = () => {
  const [expandQual, setExpandQual] = useState(false);

  const handleExpandQual = () => {
    setExpandQual((prev) => !prev);
  };
  return (
    <div className="qualification-section">
      <div className="fC qs-header">
        <h2 className="headerh2 qualification">Qualifications</h2>
        <div onClick={handleExpandQual}>
          <img className="arrowcircle colsvg" src={columnSvg} alt="expand" />
        </div>
      </div>

      <div className="qualification-section">
        <ul className="qual-inner" style={{ opacity: expandQual ? 1 : 0 }}>
          <li>
            <p>Masters in Business for Architecture and Design (MBArch) IE</p>
            <p className="job-title">University Madrid – 2021</p>
          </li>
          <li>
            <p> AA Postgraduate Diploma (AADipl)</p>
            <p className="job-title"> Architecture Association London – 2007</p>
          </li>
          <li>
            <p>
              Masters of Science Urban Design in Development (MSc) Development
              Planning Unit
            </p>
            <p className="job-title">
              The Bartlett University College London – 2003
            </p>
          </li>
          <li>
            <p>Bachelors in Architecture (BSc)</p>
            <p className="job-title">Kingston University London – 2001</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MemberDescription = ({ name, role }) => (
  <div className={`tmdes`}>
    <h1 className="headerh2">{name}</h1>
    <p className="job-title">{role}</p>
    <p>
      <p>
        Tosin Oshinowo is a Lagos-based Nigerian architect and designer renowned
        for her expansive residential and commercial spaces and insights into
        socially-responsive approaches to urbanism. Much of her work – from
        conceptual projects to civic master plans- prioritises a vision of
        architecture and design that is bigger than creating objects and spaces
        but extends to underscore a more equitable and expansive vision of our
        shared future. Deriving inspiration from local Yoruba traditions and the
        international language of architecture and design, Oshinowo explores
        pathways for the future from a distinctly African perspective that
        prioritises equity, sustainability, and respect for nature and history
        while creating a new, more contemporary language of design.
      </p>
    </p>
  </div>
);

const MemberDetails = () => (
  <div className=" team-member-page-inner">
    <div className={`fI1 visible tmpi`}>
      <p className="headerh3 fI1-header">Interior Architecture</p>

      <p>
        As an architect, Oshinowo is best known as the founder and principal of
        Oshinowo Studio (formerly cmDesign Atelier), formed in 2013. Based in
        Lagos, the practice has undertaken a number of predominantly civic
        projects, including the design of the Maryland Mall, as well as a wide
        range of residential projects, including light-filled beach houses on
        the coast of the oceanside city. Her interest in architecture extends
        into a broader vision of urbanism and community; she recently completed
        a project with the United Nations Development Programme in Northeast
        Nigeria, building an entirely new community for a village displaced by
        Boko Haram.
      </p>
    </div>
    <div className={`fI1 visible tmpi`}>
      <p className="headerh3 fI1-header">Design & Build</p>
      <p>
        Before founding Oshinowo Studio, she worked in the offices of Skidmore
        Owings & Merrill in London and the Office of Metropolitan Architecture
        Rotterdam, where she was part of the team that designed the 4th Mainland
        Bridge proposal in 2008. Returning to Lagos, she practised at James
        Cubitt Architects and led notable projects, including the master plan
        and corporate head office building for Nigeria LNG in Port Harcourt.
      </p>
    </div>
  </div>
);

const TeamMember = () => {
  const { id } = useParams();
  const member = teamMembers.find((member) => member.name === id);

  if (!member) {
    return <div className="error">Member not found</div>;
  }

  return (
    <>
      <section className="exhibitions-section team-member-page">
        <div className="wwd-container doublegrid team-member-page-inner">
          <MemberImages imageUrl={member.imageUrl} />
          <MemberDescription name={member.name} role={member.role} />
        </div>
        <MemberDetails />
      </section>
      <ChairSection name={member.name} role={member.role} />
      <CreamSection data={selectedWritings}/>
      <div className="to-blackSection">
        Oshinowo’s work also spans the conceptual sphere, with a strong interest
        in architectural history and socially responsive approaches to
        architecture, design and urbanism, underpinned by a passion for
        supporting African design and innovation. In 2020, she partnered with
        Lexus on conceptual design explorations for Design Miami, and she has
        written prolifically on urbanism, African modernism, design and identity
        in publications including Expansions, a publication for the 2021 Venice
        Architecture Biennale and an essay for the 2023 Venice Architecture
        Biennale catalogue. Her writing is also included in Omenka Online, and
        she also explored this topic in her TEDxPortHarcourt talk in November
        2017. She co-curated the second Lagos Biennial titled How to Build a
        Lagoon from a Bottle of Wine? in 2019. As well as curating the 2023
        Sharjah Architecture Triennial titled The Beauty of Impermanence: An
        Architecture of Adaptability. Tosin Oshinowo is a registered architect
        in the Federal Republic of Nigeria and a member of the Nigerian
        Institute of Architects, as well as the Royal Institute of the British
        Architects, with a Bachelor’s degree in Architecture from Kingston
        College in London, a Master’s degree in Development and Planning:
        Building and Urban Design in Development, University College London; the
        AA Diploma from the Architecture Association London, and a Masters in
        Business for Architecture and Design from IE University, Madrid. She has
        recently been selected to participate in the 2025 Loeb Fellowship at
        Harvard University. Tosin Oshinowo has won numerous awards, including
        the 3rd City People Real Estate Awards for Architect of the Year 2017
        and the Lord’s Achievers Awards for Creativity in celebration of World
        Achievers Day 2019. She was among five finalists for the 2023 Diversity
        in Architecture Divia Awards; she was included in the AD100 list for the
        Middle East and named one of The 50 most powerful women in architecture
        and design by Dezeen for International Women’s Day 2024
      </div>

      
    </>
  );
};

const ChairSection = ({ name, role }) => (
  <section className="chairSection fC">
    <div className="wwd-container doublegrid team-member-page-inner">
      <div className={`tmdes`}>
        <h1 className="headerh2">{name} Ile-Ila chairs</h1>
        <p className="job-title">{role}</p>
        <p>
          As a product designer, her work primarily focuses on chair design; in
          2017, she created Ile-Ila, which means House of Lines in her native
          Yoruba language. A luxury brand, Ile-Ila chairs are made to order,
          designed and handmade in Lagos and have been featured as a highlight
          of contemporary African furniture design in publications around the
          world, including The Financial Times Weekender April 2023, Grazia
          (June 2020), Elle Decor (January 2020) and Harper’s Bazaar Interiors
          (April 2018)
        </p>
      </div>
      <div className="team-member-imagecon doublegrid">
        <div>
          <img className="team-member-image" src={Chair2} alt={name} />
        </div>
        <div>
          <img className="team-member-image" src={Chair3} alt={name} />
        </div>
      </div>
    </div>
  </section>
);

export default TeamMember;
