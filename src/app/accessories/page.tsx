"use client";

import React from "react";
import Link from "next/link";
import "./accessories.css";

const accessories = [
  {
    title: "BADMINTON RACQUET",
    subtitle: "High-performance racquets for every player.",
    image: "/images/racquet.jpg",
  },
  {
    title: "SHUTTLECOCKS",
    subtitle: "Durable and aerodynamic shuttlecocks.",
    image: "/images/shuttlecock.jpg",
  },
  {
    title: "GRIP & STRINGS",
    subtitle: "Enhance your comfort and control.",
    image: "/images/grip.jpg",
  },
  {
    title: "BADMINTON BAGS",
    subtitle: "Stylish and spacious bags for all your gear.",
    image: "/images/bag.jpg",
  },
];

export default function AccessoriesPage() {
  return (
    <main>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">RacketPro</div>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#accessories">Accessories</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero accessories-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Accessories</h1>
          <p className="hero-subtitle">
            High-quality badminton accessories for every player.
          </p>
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="accessories-section">
        <div className="accessories-container">
          {accessories.map((accessory, index) => (
            <div className="accessory-card" key={index}>
              <div
                className="accessory-image"
                style={{ backgroundImage: `url(${accessory.image})` }}
              ></div>
              <div className="accessory-content">
                <h2 className="accessory-title">{accessory.title}</h2>
                <p className="accessory-subtitle">{accessory.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">RacketPro</div>
          <div className="footer-links">
            <ul>
              <li>Support</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}