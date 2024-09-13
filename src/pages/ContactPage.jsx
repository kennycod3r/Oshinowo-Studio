import React, { useState } from "react";

import phone from "../img/phone.png";
import laptop from "../img/laptop.png";
import TinyDiv from "../components/Util/tinyDiv/TinyDiv";
import linkdinSvg from "../components/assets/linkedin.svg";
import ContactLinks from "../components/contactLink/contactLinks";
import ArrowCircle from "../components/Util/arrowCircle/ArrowCircle";

const ContactPage = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      clientName,
      clientEmail,
      clientPhone,
      appointmentDate,
      clientMessage,
    });
    // Add your form submission logic here
  };

  return (
    <div className="flexPage">
      <div className="contact-press-page">
        <section className="devices-grid cfg">
          <div className="devices-grid1">
            <div className="hero-headtextt">
              <span className="headerp">Contact</span>
              <h1 className="flexCenter">
                <span className="dash">—</span> Let's start a project together.
              </h1>
            </div>
            <ContactLinks />
          </div>
          <div className="devices-grid1">
            <div className="ser-form">
              <form className="event-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="clientName">Name</label>
                  <input
                    type="text"
                    id="clientName"
                    placeholder="ie Clients Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    aria-label="Client Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="clientEmail">Email<span className="orangeColor">*</span></label>
                  <input
                    type="email"
                    id="clientEmail"
                    placeholder="ie Client email@google.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                    aria-label="Client Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="clientPhone">Phone Number</label>
                  <input
                    type="tel"
                    id="clientPhone"
                    placeholder="ie +234 000 000 0000"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                    aria-label="Client Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentDate">Appointment Date* (optional)</label>
                  <input
                    type="date"
                    id="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    aria-label="Appointment Date"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="clientMessage">Message * (optional)</label>
                  <textarea
                    id="clientMessage"
                    placeholder="@Oshinowo Studios, .."
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    aria-label="Client Message"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button fC">
                  Submit <ArrowCircle arrow="submit" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <section className="ContactPage">
        <div>
          <div className="hero-headtextt">
            <span className="headerp">Social</span>
            <h1 className="flexCenter">
              <span className="dash">—</span> Connect With Us.
            </h1>
          </div>
          <div className="devices-grid">
            <div className="devices-grid1">
              <div className="badge">
                <TinyDiv
                  className="au-hero-tag"
                  target="_blank"
                  link="https://www.linkedin.com/company/oshinowo-studio/"
                  imageUrl={linkdinSvg}
                  name="LinkedIn"
                  jobTitle="Oshinowo Studio."
                />
              </div>
              <div className="dev-img-container fC">
                <img src={laptop} alt="laptop" className="laptop" />
              </div>
            </div>
            <div className="devices-grid2">
              <a target="_blank" href="https://www.instagram.com/oshinowo.studio/" className="dev-img-container fC">
                <img src={phone} alt="phone" className="device" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
