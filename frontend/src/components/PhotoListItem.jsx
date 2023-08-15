import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.data;
  const {setSelectPhotoData, favorites, setFavorites, setIsModalVisible } = props;
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    if (favorites.includes(id)){
      const idIndex = favorites.indexOf(id)
      favorites.splice(idIndex, 1);
      setFavorites([...favorites])
      return
    }
    setFavorites([...favorites, id]);
  };

//Modal

  const handleOpenModal = () => {
    setIsModalVisible(true);
    setSelectPhotoData(props.data);
  };

  

  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorite={favorite} onToggle={toggleFavorite} />
      <button onClick={handleOpenModal} className="photo-button">
        <img src={urls.regular} className="photo-list__image" />
      </button>
      <div className="personal">
        <div className="info">
          <h2>{user.username}</h2>
          <p>
            {location.city}, {location.country}
          </p>
        </div>
        <img
          src={user.profile}
          className="photo-list__user-profile"
        />
      </div>
    </div>
  );
};

export default PhotoListItem;