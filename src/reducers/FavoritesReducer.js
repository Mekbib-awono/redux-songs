import { FAVORITE_SONG, UNFAVORITE_SONG } from '../actions/ActionTypes';

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

const FavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
    case FAVORITE_SONG:
        return toggleFavorite(state, action, true);
    case UNFAVORITE_SONG:
        return toggleFavorite(state, action, false);
    default:
        return state;
    }
};

export default FavoritesReducer;
