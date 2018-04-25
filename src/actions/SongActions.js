import {
  LOAD_SONGS,
  ADD_SONG,
  DELETE_SONG,
  FAVORITE_SONG,
  UNFAVORITE_SONG,
  PLAY_SONG,
  DELETE_SONG_COUNT,
  DELETE_ALL_SONG_HISTORY,
} from './ActionTypes';

const SONGS = [{
  id: 1,
  title: '1Californian raisins',
  playCount: 0,
  isFavorite: false,
}, {
  id: 2,
  title: '2Smooth criminal',
  playCount: 0,
  isFavorite: true,
}, {
  id: 3,
  title: '3Living on a prayer',
  playCount: 0,
  isFavorite: false,
}];

export const loadSongs = () => (dispatch) => {
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(songs =>
  dispatch({
    type: LOAD_SONGS,
    payload: SONGS,
  });
  // );
};


export const addSong = song => (dispatch) => {
  dispatch({
    type: ADD_SONG,
    payload: song,
  });
};

export const deleteSong = song => ({
  type: DELETE_SONG,
  payload: song,
});

export const favoriteSong = song => ({
  type: FAVORITE_SONG,
  payload: song,
});

export const unfavoriteSong = song => ({
  type: UNFAVORITE_SONG,
  payload: song,
});

export const playSong = song => ({
  type: PLAY_SONG,
  payload: song,
});

export const deleteSongCount = song => ({
  type: DELETE_SONG_COUNT,
  payload: song,
});

export const deleteSongHistory = song => ({
  type: DELETE_ALL_SONG_HISTORY,
  payload: song,
});
