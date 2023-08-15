import { useState } from "react"

export default function useApplicationData() {
  const [state, setState] = useState({
    favorites: [],
    isModalVisible: false,
    selectPhotoData: {}
  })

  const toggleFavorite = (photoId) => {
    if (state.favorites.includes(photoId)) {
      setState(prev => ({ ...prev, favorites: prev.favorites.filter(id => id !== photoId) }));
      return
    }
    setState(prev => ({ ...prev, favorites: [...prev.favorites, photoId] }));
  };

  const onClosePhotoDetailsModal = () => {
    setState(prev => ({ ...prev, isModalVisible: false }));
  };

  const onOpenPhotoDetailsModal = () => {
    setState(prev => ({ ...prev, isModalVisible: true }));
  };

  const setPhotoSelected = (data) => {
    setState(prev => ({ ...prev, selectPhotoData: data }));
  }


  return {
    state,
    toggleFavorite,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
  }
}
