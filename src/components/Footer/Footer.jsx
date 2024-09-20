import React, { useState } from "react";
import "./Footer.css";
import Compas from "../assets/compas.svg";
import Pen from "../assets/pencil.svg";
import digger from "../assets/digger.svg";
import crane from "../assets/crane.svg";

import ArrowLink from "../ArrowLink";
import ArrowCircle from "../Util/arrowCircle/ArrowCircle";
import BackToTop from "./BackToTop";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState(
    "Subscribe to our newsletter"
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscription = () => {
    if (subscribeMessage === "Subscribed!") return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeMessage("Enter a valid email");
    } else {
      setSubscribeMessage("Subscribed!");
      setEmail("");
    }
  };

  return (
    <footer className="Homefooter">
      <BackToTop />

      <div className="f-title">
        <h2 className="job-title">INFORMATION</h2>
      </div>

      <div className="footer-container">
        <div className="footer--text footer-col">
          <div className="f-grid">
            <h1 className="headerh2 fhs">
              Subscribe and Receive <br />
              News And Offers!
            </h1>
            <div className="newsletter-div">
              <p
                className={`job-title ${
                  subscribeMessage === "Enter a valid email" ? "error" : ""
                }`}
              >
                {subscribeMessage}
              </p>
              <input
                id="emailId"
                className="footerInput"
                placeholder="Enter Your @Email Address"
                type="email"
                required
                onChange={handleEmailChange}
                value={email}
              />
              <button
                type="submit"
                className="submit-button fsb"
                onClick={handleSubscription}
              >
                <p className="headerp">
                  {subscribeMessage === "Subscribed!"
                    ? "Subscribed"
                    : "Subscribe"}
                </p>
                <ArrowCircle arrow="submit" />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div>
            <p className="headerp">Locate Us</p>
          </div>
          <address className="aligned-paragraphs footer-ap">
            <p className="sP greycolor2">
              <span className="showmobile">Business Office</span>
              <br />
              5th Floor, CBC Tower, Olubunmi Owa Street, Off Admiralty Way,
              Lekki Phase 1, Lagos.
            </p>
          </address>
        </div>
        <div className="footer-col showmobile">
          <p>CONTACT</p>
          <ul className="aligned-paragraphs footer-ap">
            <li className="small-text headerp pointer">
              <a href="tel:+23412930622" className="headerp">
                +234 1 293 0622
              </a>
            </li>
            <li className="small-text headerp pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/oshinowo.studio/"
              >
                Instagram
              </a>
            </li>
            <li className="small-text headerp pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/oshinowo-studio/"
              >
                LinkedIn
              </a>
            </li>
            <li className="small-text headerp pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:oshinowostudio@gmail.com"
              >
                oshinowostudio@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="footer-strip">
        <li className="flexCenter headerp white">
          <ArrowLink /> <span className="fP greycolor2">Website BY</span>
          <span className="fP"> @KENNYCOD3R</span>
        </li>
        <li className="flexCenter headerp ">
          <ArrowLink />{" "}
          <span className="fP greycolor2">
            © 2024. Architects of oshinowostudio
          </span>
        </li>
        <li className="flexCenter headerp">
          <ArrowLink />{" "}
          <span className="fP greycolor">General Terms and Conditions</span>
        </li>
        <li className="flexCenter headerp">
          <ArrowLink /> <span className="fP greycolor">Privacy Policy</span>
        </li>
        <li className="flexCenter headerp">
          <ArrowLink />{" "}
          <span className="fP greycolor">
            Complaints procedure Legal Areas Register
          </span>
        </li>
      </ul>
    </footer>
  );
}
