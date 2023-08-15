import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({setIsModalVisible, setSelectPhotoData, photos, favorites, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map((data) => (
        <PhotoListItem
          key={data.id}
          data={data}
          favorites={favorites}
          setSelectPhotoData={setSelectPhotoData}
          setIsModalVisible={setIsModalVisible}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;