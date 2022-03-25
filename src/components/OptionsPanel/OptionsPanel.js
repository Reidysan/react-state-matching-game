import React from 'react'
import Button from '../Button'
import TileSelector from '../TileSelector'

function OptionsPanel(props) {
  return (
    <div>
      <TileSelector numTiles={props.numTiles} handleNumTileChange={props.handleNumTileChange} />
      <Button playing={props.playing} startGame={props.startGame} />
    </div>
  );
}



export default OptionsPanel
