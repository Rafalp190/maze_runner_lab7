import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ action }) => {
  let playerLook
  if (action === 0) {
    playerLook = <img src={require('../static/assets/standing.png')} alt="standing" />
  } else if (action === 1) {
    playerLook = <img src={require('../static/assets/running.png')} alt="right" />
  } else if (action === 2) {
    playerLook = <img src={require('../static/assets/running2.png')} alt="leftt" />
  } else if (action === 3) {
    playerLook = <img src={require('../static/assets/running3.png')} alt="up" />
  } else if (action === 4) {
    playerLook = <img src={require('../static/assets/running4.png')} alt="down" />
  } else if (action === 5) {
    playerLook = <img src={require('../static/assets/winner.png')} alt="win" />
  }
  return playerLook
}

Player.propTypes = {
  action: PropTypes.number.isRequired,
}
export default Player
