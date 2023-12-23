// Блок "Тизеров"

import React from "react";
import PropTypes from "prop-types";

export default function Teaser(props) {
    const altText = `картинка "${props.title}" `
  return (
    <React.Fragment>
        <div>
          <img src={props.img} alt={altText} />
          <a href={props.href}>{props.title}</a>
          <span>{props.text}</span>
        </div>
    </React.Fragment>
  );
}

Teaser.propTypes = {
    img: PropTypes.string,
    href: PropTypes.string,
    tetle: PropTypes.string,
    text: PropTypes.string,
};