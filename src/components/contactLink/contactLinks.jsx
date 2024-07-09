import React from "react";
import "./ContactLinks.css";

const ContactColumn = ({ items }) => (
  <div>
    <ul className="flexCenter flexlinks">
      {items.map((item, index) => (
        <ContactItem key={index} {...item} />
      ))}
    </ul>
  </div>
);
const ContactItem = ({ icon, text, link }) => (
  <li className="red">
    {link ? (
      <a className="" href={link}>
        <div className=" job-title">{icon}</div>
        <span className="headerp name">{text}</span>
      </a>
    ) : (
      <div className="">
        <div className="job-title">{icon}</div>
        <span className="headerp name">{text}</span>
      </div>
    )}
  </li>
);

const ContactLinks = () => {
  const column1Items = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
            stroke="#041914"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#041914"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      text: "5th Floor, CBC Tower, Olubunmi Owa, Street, Off Admiralty Way, Lekki Phase 1, Lagos",
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4163 4.66602H5.58301C4.06422 4.66602 2.83301 5.89723 2.83301 7.41602V16.5827C2.83301 18.1015 4.06422 19.3327 5.58301 19.3327H18.4163C19.9351 19.3327 21.1663 18.1015 21.1663 16.5827V7.41602C21.1663 5.89723 19.9351 4.66602 18.4163 4.66602Z"
            stroke="#041914"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6.5752 10.0361L10.3174 12.6557C10.9235 13.08 11.2266 13.2921 11.5562 13.3743C11.8474 13.4469 12.1519 13.4469 12.443 13.3743C12.7726 13.2921 13.0757 13.08 13.6818 12.6557L17.424 10.0361"
            stroke="#041914"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      text: "+234 1 293 0622, contact@oshinowostudio.com",
    },
  ];

  return (
    <section>
      <div>
        <div>
          <ul>
            <li>
              <span className="footer-title">Locate</span>
            </li>
          </ul>
        </div>
        <ContactColumn items={column1Items} />
      </div>
    </section>
  );
};

export default ContactLinks;
