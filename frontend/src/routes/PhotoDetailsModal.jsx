import React from "react";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton"
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  selectPhotoData,
  setSelectPhotoData,
  onCloseModal,
  favorites,
  setFavorites,
  toggleFavorite,
  setIsModalVisible
}) => {

  const isFavorite = favorites.includes(selectPhotoData.id);
  console.log("modal", selectPhotoData.id, isFavorite);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          isFavorite={isFavorite}
          onToggle={() => toggleFavorite(selectPhotoData.id)}
        />
        <img src={selectPhotoData.urls.full} className="photo-details-modal__image" />
      </div>
      <div className="photo-details-modal__header">
        <p>Similar Photos</p>
      </div>
      <PhotoList
        photos={Object.values(selectPhotoData.similar_photos)}
        setFavorites={setFavorites}
        favorites={favorites}
        setSelectPhotoData={setSelectPhotoData}
        setIsModalVisible={setIsModalVisible}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default PhotoDetailsModal;