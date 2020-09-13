import React from "react";

import "./random-photos.styles.scss";

const RandomPhotos = ({ index }) => (
  <div className="random-photos">
    <img
      alt="random"
      src={`https://robohash.org/${index}?set=set2&size=180x180`}
    />
  </div>
);

export default RandomPhotos;
