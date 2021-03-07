import React from "react";
import PropTypes from "prop-types";

function FooterLinks(props) {
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

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterLinks;
