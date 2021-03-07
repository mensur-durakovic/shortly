import React from "react";
import ChartIcon from "../assets/icon-brand-recognition.svg";
import MetricsIcon from "../assets/icon-detailed-records.svg";
import BrushesIcon from "../assets/icon-fully-customizable.svg";
import { CHART, METRICS, BRUSHES } from "../constants";

export default function StatisticsCard(props) {
  const { cardData, isLast } = props;

  const getIconImage = () => {
    const { icon } = cardData;
    switch (icon) {
      case CHART:
        return ChartIcon;
      case METRICS:
        return MetricsIcon;
      case BRUSHES:
        return BrushesIcon;
      default:
        return ChartIcon;
    }
  };

  return (
    <>
      <div className="statistics-card">
        <div className="statistics-card-icon">
          <img src={getIconImage()} alt="statistics card icon"></img>
        </div>
        <p className="statistics-card-title">{cardData.title}</p>
        <p className="statistics-card-text">{cardData.text}</p>
      </div>
      {!isLast && (
        <div className="statistics-card-stripe">
          <div className="statistics-card-stripe-line"></div>
        </div>
      )}
    </>
  );
}
