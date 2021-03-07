import React from "react";

export default function LinkInput() {
  return (
    <section className="link-input-wrapper">
      <form>
        <input type="url" placeholder="Shorten a link here..."></input>
        <input type="submit" value="Shorten it!"></input>
      </form>
      <div className="link-input-wrapper-bg"></div>
    </section>
  );
}
