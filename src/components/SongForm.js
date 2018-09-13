import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';

import { addSong } from '../actions/SongActions';


class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const song = {
            id: (new Date()).getTime(),
            title: document.getElementById('title').value,
            isFavorite: false,
            playCount: 0,
        };

        this.props.addSong(song);
    }

    render() {
        return (
          <div>
              <br />
              <form onSubmit={e => this.onSubmit(e)}>

                  <Input type="text" name="song" id="title" /> &nbsp;
                  <Button size="tiny">ADD SONG</Button>


                </form>
              <br />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addSong: song => dispatch(addSong(song)),
});

export default connect(null, mapDispatchToProps)(SongForm);
