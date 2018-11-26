import React from 'react'
import PropTypes from 'prop-types'

const Prompt = ({ pInput, onInput }) => (
  <div className="prompt">
    <div className="label">Dungeon Maze</div>
    <form>
      <div className="radio">
        <label id="lbl" htmlFor="Easy">
          <input
            id="Easy"
            type="radio"
            value="8"
            checked={parseInt(pInput, 10) === 8}
            onChange={(event) => { onInput(parseInt(event.target.value, 10)) }}
          />
        Easy 8x8
        </label>
      </div>
      <div className="radio">
        <label id="lbl" htmlFor="Medium">
          <input
            id="Medium"
            type="radio"
            value="10"
            checked={parseInt(pInput, 10) === 10}
            onChange={(event) => { onInput(parseInt(event.target.value, 10)) }}
          />
        Medium 10x10
        </label>
      </div>
      <div className="radio">
        <label id="lbl" htmlFor="Hard">
          <input
            id="Hard"
            type="radio"
            value="12"
            checked={parseInt(pInput, 10) === 12}
            onChange={(event) => { onInput(parseInt(event.target.value, 10)) }}
          />
        Hard 12x12
        </label>
      </div>
    </form>
  </div>
)
Prompt.propTypes = {
  pInput: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired,
}

export default Prompt
