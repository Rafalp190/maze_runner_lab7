import React from 'react'
import Block from './Block.jsx'
import Player from './Player.jsx'
import '../static/styles/mazeStyle.css'

const Maze = ({ mazeLayout, playerAction }) => {
  if (mazeLayout === 0) {
    return (
      <div className="game" />
    )
  }
  return (
    <div className="maze">
      {mazeLayout.map(x => x.map(y => (y === 'p' ? <Player action={playerAction} /> : <Block type={y} />)))}
    </div>
  )
}
export default Maze
