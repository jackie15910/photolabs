import React, { useState } from "react";
import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import "./App.scss";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectPhotoData, setSelectPhotoData] = useState({});
  console.log(favorites);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        favorites={favorites}
        setFavorites={setFavorites}
        setSelectPhotoData={setSelectPhotoData}
        setIsModalVisible={setIsModalVisible}
        toggleFavorite={toggleFavorite} // Pass toggleFavorite function
      />
      {isModalVisible && (
        <PhotoDetailsModal
          favorites={favorites}
          setFavorites={setFavorites}
          toggleFavorite={toggleFavorite}
          selectPhotoData={selectPhotoData}
          onCloseModal={handleCloseModal}
          setSelectPhotoData={setSelectPhotoData}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </div>
  );
};

export default App;