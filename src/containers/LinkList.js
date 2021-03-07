import React from "react";
import ShortenedLink from "../components/ShortenedLink";
export default function LinkList(props) {
  const { usersLinks } = props;

  return (
    <section className="link-list">
      {usersLinks.map((element) => (
        <ShortenedLink key={element.code} linkData={element} />
      ))}
    </section>
  );
}
