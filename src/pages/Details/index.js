import React from 'react'
import { usePhone } from '../../hooks'
import Loader from 'react-loader-spinner'
import { SpecsList, Error } from '../../components'

export default function Details({ match: { url: href, params: { id: phoneId } } }) {
    const { phone, error, loading } = usePhone(href)

    return (
        <div className="details__container">
            <Loader visible={loading} />
            {error && <Error message={error.message} />}
            {phone && <div className="details">
                <h1 className="details__name">{phone.name}</h1>
                <figure className="details__image-container">
                    <img className="details__image" src={phone.image_url} />
                </figure>
                <SpecsList className="details__specs-list" data={phone} />
                <div className="details__description-container">
                    <h2 className="details__description-title">Description:</h2>
                    <p className="details__description">{phone.description}</p>
                </div>
            </div>}
        </div>
    )
}