import React, { useState } from "react";

export default function ShortenedLink(props) {
  const [isCopied, setIsCopied] = useState(false);
  const { linkData } = props;
  const { originalLink, shortLink } = linkData;
  const formattedShortUrl = shortLink.startsWith("https://")
    ? shortLink
    : `https://${shortLink}`;

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(formattedShortUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="shortened-link">
      <div className="shortened-link-full">{originalLink}</div>
      <div className="shortened-link-right">
        <div className="shortened-link-short">{formattedShortUrl}</div>
        <div className="shortened-link-btn">
          <button
            className={isCopied ? "shortened-link-btn-copied" : ""}
            onClick={copyToClipboardHandler}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
