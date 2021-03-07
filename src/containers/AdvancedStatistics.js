import React from "react";
import StatisticsCard from "../components/StatisticsCard";
import { CHART, METRICS, BRUSHES } from "../constants";

export default function AdvancedStatistics() {
  const cardsData = [
    {
      icon: CHART,
      title: "Brand Recognition",
      text:
        "Boost your brand recognition with each click. Generic links don't mean a thing. branded links help instil confidence in your content.",
    },
    {
      icon: METRICS,
      title: "Detailed Records",
      text:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: BRUSHES,
      title: "Fully Customizable",
      text:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <section className="advanced-statistics">
      <div className="advanced-statistics-title">
        <h3>Advanced Statistics</h3>
        <h4>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h4>
      </div>
      <div className="advanced-statistics-cards">
        {cardsData.map((c, index) => (
          <StatisticsCard
            key={Math.random()}
            cardData={c}
            isLast={index === cardsData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
