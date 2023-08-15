import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFavorite, onToggle }) {
  const [isFavActive, setIsFavActive] = useState(isFavorite);

  const handleFavClick = () => {
    setIsFavActive(!isFavActive);
    onToggle();
  };

  return (
    <div className={`photo-list__fav-icon ${isFavActive ? 'active' : ''}`} onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={isFavActive} />
      </div>
    </div>
  );
}

export default PhotoFavButton;