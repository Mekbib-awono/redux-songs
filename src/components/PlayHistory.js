import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table, Button } from 'semantic-ui-react';

import { deleteSongCount, deleteSongHistory } from '../actions/SongActions';

class PlayHistory extends Component {
    render() {
        const songs = this.props.history.map(song => (
          <Table.Row key={song.id}>
              <Table.Cell>{song.title}</Table.Cell>
              <Table.Cell><Button size="mini" onClick={() => this.props.deleteSongCount(song)}>Reset count</Button> </Table.Cell>
            </Table.Row>
        ));

        if (!songs.length) {
            return (<div>No PlayHistory</div>);
        }

        return (
          <div>
              <h3>PLAY HISTORY <Button size="mini" onClick={() => this.props.deleteSongHistory()}>DELETE HISTORY</Button> </h3>
              <Table>
                  <Table.Header>
                      <Table.Row />
                      <Table.Row>
                          <Table.HeaderCell>Song title</Table.HeaderCell>
                          <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                  <Table.Body>
                      {songs}
                    </Table.Body>

                </Table>
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
