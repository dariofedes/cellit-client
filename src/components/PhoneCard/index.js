import React from 'react'

const PhoneCard = ({ phone }) => {
    return (
        <li className="card">
            <figure className="card__image-container">
                <img className="card__image" src={phone.image_url} />
            </figure>
            <div className="card__details">
                <div className="card__title-container">
                    <h1 className="card__title">{phone.name}</h1>
                    <h2 className="card__manufacturer">{phone.manufacturer.toUpperCase()}</h2>
                </div>
                <span className="card__price">{phone.price}€</span>
            </div>
        </li>
    )
}

export default PhoneCard
