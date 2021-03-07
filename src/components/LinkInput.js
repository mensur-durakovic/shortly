import React, { useState } from "react";
import PropTypes from "prop-types";

import { validURL } from "../utils";
import { shortenUrl } from "../api";

function LinkInput(props) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { saveNewLinkHandler } = props;

  const submitFormHandler = (event) => {
    event.preventDefault();
    const urlValid = validURL(url);
    setError(!urlValid);
    if (urlValid) {
      setSubmitting(true);
      shortenUrl(url)
        .then((response) => {
          setSubmitting(false);
          const result = {
            originalLink: response.data.result.original_link,
            shortLink: response.data.result.short_link,
            code: response.data.result.code,
          };
          saveNewLinkHandler(result);
          setUrl("");
          setError(false);
        })
        .catch((err) => {
          setSubmitting(false);
          console.error("An error occurred: ", err);
        });
    }
  };

  const onChangeHandler = (event) => {
    setUrl(event.target.value);
    setError(false);
    setSubmitting(false);
  };

  return (
    <section className="link-input-wrapper">
      <form onSubmit={submitFormHandler}>
        <div className="link-input-wrapper-field">
          <input
            type="url"
            className={error ? "link-input-wrapper-error" : ""}
            placeholder="Shorten a link here..."
            onChange={onChangeHandler}
          ></input>
          {error ? (
            <span className="link-input-wrapper-error-message">
              Please enter valid URL
            </span>
          ) : null}
          {submitting ? (
            <span className="link-input-wrapper-wait-message">
              Please wait...
            </span>
          ) : null}
        </div>
        <input type="submit" value="Shorten it!" disabled={submitting}></input>
      </form>
      <div className="link-input-wrapper-bg"></div>
    </section>
  );
}

LinkInput.propTypes = {
  saveNewLinkHandler: PropTypes.func.isRequired,
};

export default LinkInput;
