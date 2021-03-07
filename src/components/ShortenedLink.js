import React from "react";

export default function ShortenedLink(props) {
  const { linkData } = props;
  return (
    <div className="shortened-link">
      <div className="shortened-link-full">{linkData.fullUrl}</div>
      <div className="shortened-link-right">
        <div className="shortened-link-short">{linkData.shortUrl}</div>
        <div className="shortened-link-btn">
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
}
