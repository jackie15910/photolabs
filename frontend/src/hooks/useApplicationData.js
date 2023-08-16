import { useReducer, useState, useEffect } from "react"

export const ACTIONS = { //Actions is an object, ignore strings
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  REMOVE_PHOTO_DETAILS: 'REMOVE_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
}

const initialState = {
  favorites: [],
  isModalVisible: false,
  selectPhotoData: {},
  photoData: [],
  topicData: []
}


export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return { ...state, favorites: [...state.favorites, action.photoId] } //Stores the old info with spread into array, then adds new element
      case ACTIONS.FAV_PHOTO_REMOVED:
        return { ...state, favorites: state.favorites.filter(id => id !== action.photoId) }; //filter method to remove id out of array
      case ACTIONS.SELECT_PHOTO:
        return { ...state, selectPhotoData: action.selectPhotoData } //Replaces empty selectphotodata object with the new action object which has data
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return { ...state, isModalVisible: true }; //Just booleans
      case ACTIONS.REMOVE_PHOTO_DETAILS:
        return { ...state, isModalVisible: false };
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.photoData}
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.topicData}
      default:
        return state;
    }
  }

  useEffect(() => {
    fetch(`http://localhost:8001/api/photos`).then(response => response.json())
    .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photoData: data}));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8001/api/topics`).then(response => response.json())
    .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, topicData: data}));
  }, []);

  const onTopicSelect = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`).then(response => response.json())
    .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photoData: data}));
  }

  const toggleFavorite = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.REMOVE_PHOTO_DETAILS });
  };

  const onOpenPhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const setPhotoSelected = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, selectPhotoData: data });
  }


  return {
    state,
    toggleFavorite,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
    onTopicSelect
  }
}
