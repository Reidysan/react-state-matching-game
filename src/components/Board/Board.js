import React from 'react'
import './Board.css';
import Tile from '../Tile';

const Board = (props) => {

  const tiles = tiles.map((tile) => {
    <Tile tile={tile} />
  })

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      <Tile tile={props.tile} />
    </div>
  )
}

export default Board
