import React from "react";

export default function FooterLinks(props) {
  const { title, links } = props;
  return (
    <div className="footer-links">
      <span>{title}</span>
      {links.map((link) => (
        <a key={Math.random()} href={link.url} target="_blank" rel="noreferrer">
          {link.title}
        </a>
      ))}
    </div>
  );
}
