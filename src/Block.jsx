import React from 'react'
import PropTypes from 'prop-types'

const Block = ({ type }) => {
  if (type === '+') {
    return (<img src={require('../static/assets/corner.png')} alt="corner" />)
  } else if (type === '-') {
    return (<img src={require('../static/assets/wall.png')} alt="wall" />)
  } else if (type === '|') {
    return (<img src={require('../static/assets/wall.png')} alt="wall" />)
  } else if (type === 'g') {
    return (<img src={require('../static/assets/goal.png')} alt="goal" />)
  } else if (type === 'w') {
    return (<img src={require('../static/assets/victory.png')} alt="goal" />)
  }
  return (<img className="floor" src={require('../static/assets/floor.png')} alt="floor" />)
}

Block.propTypes = {
  type: PropTypes.string.isRequired,
}
export default Block
