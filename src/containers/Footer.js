import React from "react";
import { ReactComponent as LogoImage } from "../assets/logo.svg";
import FooterLinks from "../components/FooterLinks";
import FooterIcons from "../components/FooterIcons";
import { FACEBOOK, TWITTER, PINTEREST, INSTAGRAM } from "../constants";

export default function Footer() {
  const linkGroups = [
    {
      title: "Features",
      links: [
        { title: "Link Shortening", url: "https://google.com" },
        { title: "Branded Links", url: "https://google.com" },
        { title: "Analytics", url: "https://google.com" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blog", url: "https://google.com" },
        { title: "Developers", url: "https://google.com" },
        { title: "Support", url: "https://google.com" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About", url: "https://google.com" },
        { title: "Our team", url: "https://google.com" },
        { title: "Careers", url: "https://google.com" },
        { title: "Contact", url: "https://google.com" },
      ],
    },
  ];

  const iconsData = [
    { name: FACEBOOK, url: "https://facebook.com" },
    { name: TWITTER, url: "https://twitter.com" },
    { name: PINTEREST, url: "https://pinterest.com" },
    { name: INSTAGRAM, url: "https://instagram.com" },
  ];

  return (
    <footer>
      <LogoImage fill="white" className="footer-logo" />
      <div className="footer-nav">
        {linkGroups.map((group) => (
          <FooterLinks
            key={group.title}
            title={group.title}
            links={group.links}
          />
        ))}
        <FooterIcons iconsData={iconsData} />
      </div>
    </footer>
  );
}
