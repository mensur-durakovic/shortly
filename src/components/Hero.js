import React from "react";
import HeroImage from "../assets/illustration-working.svg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-img">
        <img src={HeroImage} alt="woman working illustration"></img>
      </div>
      <div className="hero-infos">
        <h1>More than just shorter links</h1>
        <h2>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </h2>
        <button>Get Started</button>
      </div>
    </section>
  );
}
