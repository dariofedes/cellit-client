import React from 'react'

const SpecsList = ({ data }) => {
  return (
    <div className="specs-list">
      <h1 className="specs-list__title">Specs:</h1>
      <ul className="specs-list__list">
        <li className="specs-list__spec">Manufacturer: {data.manufacturer.toUpperCase()}</li>
        <li className="specs-list__spec">Screen size: {data.screen_size}"</li>
        <li className="specs-list__spec">Chip: {data.chip || "N/A"}</li>
        <li className="specs-list__spec">Price: {data.price}€</li>
      </ul>
    </div>
  )
}

export default SpecsList
