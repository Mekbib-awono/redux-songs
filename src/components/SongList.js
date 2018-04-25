import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongForm from './SongForm';

import {
  loadSongs,
  deleteSong,
  favoriteSong,
  unfavoriteSong,
  playSong,
} from '../actions/SongActions';

class SongList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     songs: [{
  //       id: 1,
  //       title: 'Californian raisins',
  //       playcount: 0,
  //       isFavorite: false,
  //     }, {
  //       id: 2,
  //       title: 'Smooth criminal',
  //       playcount: 0,
  //       isFavorite: true,
  //     }, {
  //       id: 3,
  //       title: 'Living on a prayer',
  //       playcount: 0,
  //       isFavorite: false,
  //     }],
  //   };
  // }

  componentWillMount() {
    this.props.loadSongs();
  }

  render() {
    const { songs } = this.props;

    if (!songs) {
      return (
        <div>
          <SongForm />
          <p>No Songs in your library</p>
        </div>);
    }

    const songEl = songs.map(song => (
      <tr key={song.id}>
        <td>{song.title}</td>
        <td>{song.isFavorite ?
          <button onClick={() => this.props.unfavoriteSong(song)}>Remove</button> :
          <button onClick={() => this.props.favoriteSong(song)}>Add</button>
        }
        </td>
        <td>
          <button onClick={() => this.props.playSong(song)}>Play</button> &nbsp;
          <button onClick={() => this.props.deleteSong(song)}>Delete</button>
        </td>
        <td>{song.playCount}</td>
      </tr>
    ));


    return (
      <div>
        <SongForm />

        <h3>SONG LIST</h3>

        <table>
          <thead>
            <tr>
              <th>Song title</th>
              <th>Favorite</th>
              <th>Actions</th>
              <th>play count</th>
            </tr>
          </thead>
          <tbody>
            {songEl}
          </tbody>
        </table>
      </div>
    );
  }
}

// TODO why not state.songs??
const mapStateToProps = state =>
  ({ songs: state.songs.songs });

const mapDispatchToProps = dispatch => ({
  loadSongs: () => dispatch(loadSongs()),
  playSong: song => dispatch(playSong(song)),
  favoriteSong: song => dispatch(favoriteSong(song)),
  unfavoriteSong: song => dispatch(unfavoriteSong(song)),
  deleteSong: song => dispatch(deleteSong(song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
