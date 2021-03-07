import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as IconFacebook } from "../assets/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../assets/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../assets/icon-instagram.svg";
import { FACEBOOK, TWITTER, PINTEREST, INSTAGRAM } from "../constants";

function FooterIcons(props) {
  const { iconsData } = props;

  const getIconImage = (iconName) => {
    switch (iconName) {
      case FACEBOOK:
        return IconFacebook;
      case TWITTER:
        return IconTwitter;
      case PINTEREST:
        return IconPinterest;
      case INSTAGRAM:
        return IconInstagram;
      default:
        return IconFacebook;
    }
  };

  return (
    <div className="footer-icons">
      {iconsData.map((icon) => {
        const FooterIconSvg = getIconImage(icon.name);
        return (
          <a
            href={icon.url}
            key={Math.random()}
            target="_blank"
            rel="noreferrer"
          >
            <FooterIconSvg />
          </a>
        );
      })}
    </div>
  );
}

FooterIcons.propTypes = {
  iconsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterIcons;
