import React from 'react'
import PropTypes from 'prop-types'
import Block from './Block.jsx'
import Player from './Player.jsx'
import './styles/mazeStyle.css'

const Maze = ({ mazeLayout, playerAction }) => {
  if (mazeLayout === 0) {
    return (
      <div />
    )
  }
  return (
    <div className="maze">
      {mazeLayout.map(x => x.map(y => (y === 'p' ? <Player action={playerAction} /> : <Block type={y} />)))}
    </div>
  )
}
Maze.propTypes = {
  mazeLayout: PropTypes.array.isRequired,
  playerAction: PropTypes.number.isRequired,


}

export default Maze
