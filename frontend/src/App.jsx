import React, { useState } from "react";
import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import "./App.scss";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectPhotoData, setSelectPhotoData] = useState({});
  const [modalFavorites, setModalFavorites] = useState([]);

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
        modalFavorites={modalFavorites} // Pass modal favorites
        toggleFavorite={toggleFavorite} // Pass toggleFavorite function
      />
      {isModalVisible && (
        <PhotoDetailsModal
          favorites={favorites}
          setFavorites={setFavorites}
          toggleFavorite={toggleFavorite}
          selectPhotoData={selectPhotoData}
          onCloseModal={handleCloseModal}
          modalFavorites={modalFavorites} // Pass modal favorites
        />
      )}
    </div>
  );
};

export default App;