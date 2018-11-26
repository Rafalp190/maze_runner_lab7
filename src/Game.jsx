import React from 'react'
import Axios from 'axios'
import Prompt from './Prompt.jsx'
import Maze from './Maze.jsx'


class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      mazeSize: 0,
      maze: 0,
      victory: 0,
    }
    this.boundHandleInputChange = this.handleInputChange.bind(this)
  }

  async handleInputChange(value) {
    const response = await Axios.get('http://34.210.35.174:3001/?w=8&h='+value+'&type=json')
    const gameMap = response.data
    this.setState({
      maze: gameMap,
      mazeSize: value,
    })
  }


  render() {
    return (
      <div className="game">
        <div className="promptpos">
          <Prompt pInput={this.state.mazeSize} onInput={this.boundHandleInputChange} />
        </div>
        <div className="mazeContainer">
          <Maze mazeLayout={this.state.maze} playerAction={0} />
        </div>
      </div>)
  }
}

export default Game
