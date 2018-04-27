import { combineReducers } from 'redux';
import SongListReducer from './SongListReducer';
import PlayHistoryReducer from './PlayHistoryReducer';
import FavoritesReducer from './FavoritesReducer';

export default combineReducers({
    songs: SongListReducer,
    // favorites: FavoritesReducer,
    // history: PlayHistoryReducer,
});
