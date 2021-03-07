import React from "react";
import ShortenedLink from "../components/ShortenedLink";
export default function LinkList() {
  const linkList = [
    {
      code: "KCveN",
      fullUrl:
        "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G",
      shortUrl: "https://app.shrtco.de/docs",
    },
    {
      code: "KCveN1",
      fullUrl:
        "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G",
      shortUrl: "https://app.shrtco.de/docs",
    },
    {
      code: "KCveN2",
      fullUrl:
        "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G",
      shortUrl: "https://app.shrtco.de/docs",
    },
  ];

  return (
    <section className="link-list">
      {linkList.map((element) => (
        <ShortenedLink key={element.code} linkData={element} />
      ))}
    </section>
  );
}
