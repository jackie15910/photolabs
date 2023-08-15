import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  setSelectPhotoData,
  setFavorites,
  favorites,
  setIsModalVisible,
  toggleFavorite
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar favoritesLength={favorites.length} />
      <PhotoList
        photos={photos}
        setFavorites={setFavorites}
        favorites={favorites}
        setSelectPhotoData={setSelectPhotoData}
        setIsModalVisible={setIsModalVisible}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;