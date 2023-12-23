/* eslint-disable jsx-a11y/anchor-is-valid */
// Блок "Валюта"

import React from "react";
import PropTypes from "prop-types";

export default function Valuta(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <a href={item.href}>{item.name}</a>
      <span className="stock-value">{item.value}</span>
      <span className="stock-change">{item.change}</span>
    </React.Fragment>
  );
}

Valuta.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node,
};