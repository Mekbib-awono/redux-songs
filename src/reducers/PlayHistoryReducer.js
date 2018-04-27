import {
    PLAY_SONG,
    DELETE_SONG_COUNT,
    DELETE_ALL_SONG_HISTORY,
} from '../actions/ActionTypes';

const initialState = {
    songs: [],
    favorites: [],
    history: [],
};

const PlayHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
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

export default PlayHistoryReducer;
