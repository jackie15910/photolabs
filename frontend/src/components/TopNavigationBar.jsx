import React from "react";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ favoritesLength, onFavoriteToggle }) => {
  const isFavFilled = favoritesLength > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar-section">
      <TopicList />
      <FavBadge isFavPhotoExist={isFavFilled} filled={isFavFilled} />
      </div>
    </div>
  );
};

export default TopNavigationBar;