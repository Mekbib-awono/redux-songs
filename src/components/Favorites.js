import React, { Component } from 'react';
import { connect } from 'react-redux';

import { unfavoriteSong } from '../actions/SongActions';

class Favorites extends Component {
  render() {
    const songs = this.props.favorites;

    if (!songs) {
      return (<div>No favorites</div>);
    }

    const favorites = songs.map(song => (
      <tr key={song.id}>
        <td>{song.title}</td>
        <td><button onClick={() => this.props.unfavoriteSong(song)}>Remove</button> </td>
      </tr>
    ));

    return (
      <div>
        <h3>Favorites</h3>
        <table>
          <thead>
            <tr>
              <th>Song title</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {favorites}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.songs.favorites,
});


const mapDispatchToProps = dispatch => ({
  unfavoriteSong: song => dispatch(unfavoriteSong(song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
