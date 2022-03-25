import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles, indexOfSelected } from '../../misc/utils';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    };
  }

  startGame(numTiles) {
    this.setState((state) => {
      return {
        playing: true,
        previousTileIndex: null,
        toBeCleared: null,
        tiles: createTiles(this.state.numTiles)
      }
    });
  };

  handleTileClicked(id, color) {
    this.setState((state) => {
      const tiles = this.state.tiles;
      const toBeCleared = this.state.toBeCleared;
      const selectedTileIndex = indexOfSelected(tiles, id, color);
      const previousTileIndex = this.state.previousTileIndex;

      if (previousTileIndex !== null) {

      } else {
        previousTileIndex === selectedTileIndex;
      }

      return {
        tiles,
        toBeCleared,
        previousTileIndex
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Turbo-Matcher
        </header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.startGame} />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
      </div>
    );

  }
}

export default App;
