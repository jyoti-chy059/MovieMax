import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const CardData = ({ name, date }) => {
  return (
    <>
      <div className="cardName">{name}</div>
      <p className="cardDate">{date}</p>
    </>
  )
}

CardData.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
}

export default CardData
