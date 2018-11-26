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
      playerAction: 0,
      x: 1,
      y: 1,
    }
    this.boundHandleInputChange = this.handleInputChange.bind(this)
    this.boundHandleKeyDown = this.handleKeyDown.bind(this)
  }

  async handleInputChange(value) {
    const response = await Axios.get('http://34.210.35.174:3001/?w=8&h=' + value + '&type=json')
    const gameMap = response.data
    this.setState({
      maze: gameMap,
      mazeSize: value,
      x: 1,
      y: 1,
      playerAction: 0,
      victory: 0,
    })
  }

  handleKeyDown(e) {
    e.preventDefault()

    if (e.key === 'ArrowLeft') {
      const movements = this.state.maze
      if (movements[this.state.y][this.state.x - 1] === ' ') {
        movements[this.state.y][this.state.x] = ' '
        movements[this.state.y][this.state.x - 1] = 'p'
        this.setState({
          x: this.state.x - 1,
          maze: movements,
          playerAction: 2,
        })
      }
      if (movements[this.state.y][this.state.x - 1] === 'g') {
        movements[this.state.y][this.state.x] = 'p'
        movements[this.state.y][this.state.x - 1] = 'w'
        this.setState({
          x: this.state.x - 1,
          maze: movements,
          playerAction: 5,
          victory: 1,
        })
        setTimeout(() => {
          this.setState({
            victory: 0,
          })
        }, 10000)
      }
    }
    if (e.key === 'ArrowRight') {
      const movements = this.state.maze
      if (movements[this.state.y][this.state.x + 1] === ' ') {
        movements[this.state.y][this.state.x] = ' '
        movements[this.state.y][this.state.x + 1] = 'p'
        this.setState({
          x: this.state.x + 1,
          maze: movements,
          playerAction: 1,
        })
      }
      if (movements[this.state.y][this.state.x + 1] === 'g') {
        movements[this.state.y][this.state.x] = 'p'
        movements[this.state.y][this.state.x + 1] = 'w'
        this.setState({
          x: this.state.x + 1,
          maze: movements,
          playerAction: 5,
          victory: 1,
        })
        setTimeout(() => {
          this.setState({
            victory: 0,
          })
        }, 10000)
      }
    }

    if (e.key === 'ArrowUp') {
      const movements = this.state.maze
      if (movements[this.state.y - 1][this.state.x] === ' ') {
        movements[this.state.y][this.state.x] = ' '
        movements[this.state.y - 1][this.state.x] = 'p'
        this.setState({
          y: this.state.y - 1,
          maze: movements,
          playerAction: 3,
        })
      }
      if (movements[this.state.y - 1][this.state.x] === 'g') {
        movements[this.state.y][this.state.x] = 'p'
        movements[this.state.y - 1][this.state.x] = 'w'
        this.setState({
          y: this.state.y - 1,
          maze: movements,
          playerAction: 5,
          victory: 1,
        })
        setTimeout(() => {
          this.setState({
            victory: 0,
          })
        }, 10000)
      }
    }
    if (e.key === 'ArrowDown') {
      const movements = this.state.maze
      if (movements[this.state.y + 1][this.state.x] === ' ') {
        movements[this.state.y][this.state.x] = ' '
        movements[this.state.y + 1][this.state.x] = 'p'
        this.setState({
          y: this.state.y + 1,
          maze: movements,
          playerAction: 4,
        })
      }
      if (movements[this.state.y + 1][this.state.x] === 'g') {
        movements[this.state.y][this.state.x] = 'p'
        movements[this.state.y + 1][this.state.x] = 'w'
        this.setState({
          y: this.state.y - 1,
          maze: movements,
          playerAction: 5,
          victory: 1,
        })
        setTimeout(() => {
          this.setState({
            victory: 0,
          })
        }, 10000)
      }
    }
  }

  render() {
    return (
      <div className="game" onKeyDown={this.boundHandleKeyDown}>
        <div className={this.state.victory === 0 ? 'victoryWindow.disabled' : 'victoryWindow'} />
        <div className="promptpos">
          <Prompt pInput={this.state.mazeSize} onInput={this.boundHandleInputChange} />
        </div>
        <div className="mazeContainer">
          <Maze mazeLayout={this.state.maze} playerAction={this.state.playerAction} />
        </div>
      </div>)
  }
}

export default Game
