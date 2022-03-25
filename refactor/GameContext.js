import React from 'react'
import { createContext } from 'react/cjs/react.production.min'

const GameContext = React.createContext({
    numTiles: 36,
    playing: false,
    handleNumTileChange: () => { },
    startPlaying: () => { }
});


export default GameContext