import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.data;
  const {setSelectPhotoData, favorites, setFavorites, setIsModalVisible, toggleFavorite } = props;
  const isFavorite = favorites.includes(id);
  console.log("item", id, isFavorite);
//Modal
  const handleOpenModal = () => {
    setIsModalVisible(true);
    setSelectPhotoData(props.data);
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