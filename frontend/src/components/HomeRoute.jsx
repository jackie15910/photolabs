import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  setSelectPhotoData,
  setFavorites,
  favorites,
  setIsModalVisible,
  toggleFavorite
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar favoritesLength={favorites.length} topics={topics} />
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