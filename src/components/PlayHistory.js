import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteSongCount, deleteSongHistory } from '../actions/SongActions';

class PlayHistory extends Component {
  render() {
    const songs = this.props.history.map(song => (
      <tr key={song.id}>
        <td>{song.title}</td>
        <td><button onClick={() => this.props.deleteSongCount(song)}>Reset count</button> </td>
      </tr>
    ));

    if (!songs.length) {
      return (<div>No PlayHistory</div>);
    }

    return (
      <div>
        <h3>PLAY HISTORY <button onClick={() => this.props.deleteSongHistory()}>DELETE HISTORY</button> </h3>
        <table>
          <thead>
            <tr />
            <tr>
              <th>Song title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {songs}
          </tbody>

        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.songs.history,
});


const mapDispatchToProps = dispatch => ({
  deleteSongCount: song => dispatch(deleteSongCount(song)),
  deleteSongHistory: () => dispatch(deleteSongHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayHistory);
