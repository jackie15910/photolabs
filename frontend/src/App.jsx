import React, { useState } from "react";
import useApplicationData from "hooks/useApplicationData";
import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import "./App.scss";

const App = () => {

  const {
    state,
    toggleFavorite,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
  } = useApplicationData()


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        favorites={state.favorites}
        setSelectPhotoData={setPhotoSelected}
        setIsModalVisible={onOpenPhotoDetailsModal}
        toggleFavorite={toggleFavorite} // Pass toggleFavorite function
      />
      {state.isModalVisible && (
        <PhotoDetailsModal
          favorites={state.favorites}
          toggleFavorite={toggleFavorite}
          selectPhotoData={state.selectPhotoData}
          onCloseModal={onClosePhotoDetailsModal}
          setSelectPhotoData={setPhotoSelected}
          setIsModalVisible={onOpenPhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;