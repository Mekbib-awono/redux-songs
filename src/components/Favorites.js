import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';

import { unfavoriteSong } from '../actions/SongActions';

class Favorites extends Component {
    render() {
        const songs = this.props.favorites;

        if (!songs || !songs.length) {
            return (<div>No favorites</div>);
        }

        const favorites = songs.map(song => (
          <Table.Row key={song.id}>
                <Table.Cell>{song.title}</Table.Cell>
              <Table.Cell><Button size="mini" onClick={() => this.props.unfavoriteSong(song)}>Remove</Button> </Table.Cell>
            </Table.Row>
        ));

        return (
            <div>
            <h3>FAVORITES</h3>
            <Table>
                <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Song title</Table.HeaderCell>
                            <Table.HeaderCell>Favorite</Table.HeaderCell>
                  </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {favorites}
              </Table.Body>
                </Table>
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
