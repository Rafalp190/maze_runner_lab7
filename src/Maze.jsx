import React from 'react'
import Block from './Block.jsx'
import Player from './Player.jsx'
import './styles/mazeStyle.css'

const Maze = ({ mazeLayout, mazeSize }) => {
  if (mazeLayout === 0) {
    return (
      <div />
    )
  }
  return (
    <div className="maze">
      {mazeLayout.map(x => x.map(y => (y === 'p' ? <Player action={0} /> : <Block type={y} />)))}
    </div>
  )
}

export default Maze
