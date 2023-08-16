import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.data;
  const {setSelectPhotoData, favorites, setIsModalVisible, toggleFavorite } = props;
  const isFavorite = favorites.includes(id);
//Modal
  const handleOpenModal = () => {
    setSelectPhotoData(props.data);
    setIsModalVisible(true);
  };

  const onToggle = () => {
    toggleFavorite(id);
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorite={isFavorite} onToggle={onToggle} />
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