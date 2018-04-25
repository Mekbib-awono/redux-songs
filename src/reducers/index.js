import { combineReducers } from 'redux';
import SongReducer from './SongReducer';

export default combineReducers({
  songs: SongReducer,
});
