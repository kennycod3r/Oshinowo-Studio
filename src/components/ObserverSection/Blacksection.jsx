// src/components/BlackSection.js
import React from "react";
import "./BlackSection.css";

const BlackSection = () => {
    const menuItems = {
        starters: ["Japanese Hamachi", "Gillardeau Oyster"],
        mains: [
          "John Dory",
          "Norwegian Lobster",
          "Red Mullet",
          "Lamb",
          "Cheese Chariot",
          "Strawberry",
        ],
        desserts: ["Valrhona Chocolate", "Strawberry", "Cheese Chariot"],
        lunch: [
          "John Dory",
          "Norwegian Lobster",
          "Red Mullet",
          "Lamb",
          "Cheese Chariot",
        ],
      };
    
      return (
        <div>
          <div className="blacksection">
          <p className="headerh3">Blacksection</p>
            <div className="menu-table">
              <div className="menu-cat-one">
                <div className="menu-category">
                  <div>
                    <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D" alt="phouse" />
                  </div>
                  <ul>
                    {menuItems.lunch.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    <li>COMPLIMENTARY</li>
                    <li>Sparkling water</li>
                    <li>Bottle of candance</li>
                  </ul>
                </div>
                <div className="qr-code">
                    <h2 className="headerh2">What we do</h2>
                </div>
              </div>
              <div className="menu-cat-one">
                <div className="menu-category">
                <div>
                    <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D" alt="phouse" />
                  </div>
                  <ul>
                    {menuItems.lunch.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    <li>COMPLIMENTARY</li>
                    <li>Sparkling water</li>
                    <li>Bottle of candance</li>
                  </ul>
                </div>
                <div className="qr-code">
                    <h2 className="headerh2">What we do</h2>
                </div>
              </div>
              <div className="menu-cat-one">
                <div className="menu-category">
                <div>
                    <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D" alt="phouse" />
                  </div>
                  <ul>
                    {menuItems.lunch.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    <li>COMPLIMENTARY</li>
                    <li>Sparkling water</li>
                    <li>Bottle of candance</li>
                  </ul>
                </div>
                <div className="qr-code">
                    <h2 className="headerh2">EXTERIOR</h2>
                </div>
              </div>
              <div className="menu-cat-one">
                <div className="menu-category">
                  <div>
                    <i className="num">01</i>
                    <h2>INTERIOR.</h2>
                  </div>
                  <ul>
                    {menuItems.lunch.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    <li>COMPLIMENTARY</li>
                    <li>Sparkling water</li>
                    <li>Bottle of candance</li>
                  </ul>
                </div>
                <div className="qr-code">
                    <h2 className="headerh2">PROJECT</h2>
                </div>
              </div>
              <div className="menu-cat-one">
                <div className="menu-category">
                <div>
                    <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D" alt="phouse" />
                  </div>
                  <ul>
                    {menuItems.lunch.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    <li>COMPLIMENTARY</li>
                    <li>Sparkling water</li>
                    <li>Bottle of candance</li>
                  </ul>
                </div>
                <div className="qr-code">
                    <h2 className="headerh2">BUILD</h2>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      );
    };
 
export default BlackSection;
