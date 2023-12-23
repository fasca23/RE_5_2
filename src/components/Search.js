// Прорисовка "Поиска"

import React from "react";

export default function Search() {
  return (
    <React.Fragment>
      <form>
        <input type="text" className="input-text" />
        <input type="button" value="Найти" />
      </form>
    </React.Fragment>
  );
}