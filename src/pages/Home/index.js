import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { PhoneCard, Error } from '../../components'
import { usePhones } from '../../hooks'

export default function Home() {
    const { phones, error, loading } = usePhones()

    return (
        <div className="home">
            <Loader visible={loading} />
            {phones && <ul className="home__list list">
                {phones.map(phone => <Link to={phone.href}><PhoneCard phone={phone} /></Link>)}
            </ul>}
            {error && <Error message={error.message} />}
        </div>
    )
}