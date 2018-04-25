import {
  LOAD_SONGS,
  ADD_SONG,
  DELETE_SONG,
  FAVORITE_SONG,
  UNFAVORITE_SONG,
  PLAY_SONG,
  DELETE_SONG_COUNT,
  DELETE_ALL_SONG_HISTORY,
} from '../actions/ActionTypes';

const initialState = {
  songs: [],
  favorites: [],
  history: [],
};

function toggleFavorite(state, action, toggleValue) {
  const favorites = toggleValue ?
    [...state.favorites, action.payload] :
    [...state.favorites.filter(song => song.id !== action.payload.id)];
  return {
    ...state,
    songs: [...state.songs.map((song) => {
      if (song.id === action.payload.id) {
        return { ...song, isFavorite: toggleValue };
      }
      return song;
    })],
    favorites,
  };
}

const SongReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SONGS:
      return { ...state, songs: action.payload, favorites: action.payload.filter(song => song.isFavorite) };
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case DELETE_SONG:
      return {
        ...state,
        songs: [...state.songs.filter(song => song.id !== action.payload.id)],
      };
    case FAVORITE_SONG:
      return toggleFavorite(state, action, true);
    case UNFAVORITE_SONG:
      return toggleFavorite(state, action, false);
    case PLAY_SONG:
      return {
        ...state,
        songs: [...state.songs.map((song) => {
          if (song.id === action.payload.id) {
            return { ...song, playCount: (song.playCount + 1) };
          }
          return song;
        })],
        history: [action.payload, ...state.history.filter(song => song.id !== action.payload.id)],
      };
    case DELETE_SONG_COUNT:
      return {
        ...state,
        songs: [...state.songs.map((song) => {
          if (song.id === action.payload.id) {
            return { ...song, playCount: 0 };
          }
          return song;
        })],
        history: [...state.history.filter(song => song.id !== action.payload.id)],
      };
    case DELETE_ALL_SONG_HISTORY:
      return {
        ...state,
        songs: [...state.songs.map(song => ({ ...song, playCount: 0 }))],
        history: [],
      };
    default:
      return state;
  }
};

export default SongReducer;
