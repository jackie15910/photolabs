import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFavorite, onToggle }) {
  const handleFavClick = () => {
    onToggle();
  };

  return (
    <div className={`photo-list__fav-icon ${isFavorite ? 'active' : ''}`} onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;