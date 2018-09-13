import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';

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

        if (!songs || !songs.length) {
            return (
                <div>
                <SongForm />
                <p>No Songs in your library</p>
              </div>);
        }

        const songEl = songs.map(song => (
            <Table.Row key={song.id}>
            <Table.Cell>{song.title}</Table.Cell>
                <Table.Cell>{song.isFavorite ?
                <Button compact size="mini" onClick={() => this.props.unfavoriteSong(song)}>Remove</Button> :
                    <Button compact size="mini" onClick={() => this.props.favoriteSong(song)}>Add</Button>
                }
              </Table.Cell>
                <Table.Cell>
                    <Button compact size="mini" onClick={() => this.props.playSong(song)}>Play</Button> &nbsp;
                <Button compact size="mini" onClick={() => this.props.deleteSong(song)}>Delete</Button>
              </Table.Cell>
                <Table.Cell>{song.playCount}</Table.Cell>
          </Table.Row>
        ));


        return (
            <div style={{ width: '80%', margin: '0 auto' }}>
                <SongForm />

                <h3>SONG LIST</h3>

                <Table striped>
                <Table.Header>
                      <Table.Row>
                            <Table.HeaderCell>Song title</Table.HeaderCell>
                            <Table.HeaderCell>Favorite</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                            <Table.HeaderCell>play count</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {songEl}
                  </Table.Body>
              </Table>
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
