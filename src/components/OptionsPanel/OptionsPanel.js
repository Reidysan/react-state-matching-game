import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

function OptionsPanel(props) {
  return (
    <div>
      <TileSelector numTiles={props.numTiles} />
      <Button playing={props.playing} />
    </div>
  );
}



export default OptionsPanel
