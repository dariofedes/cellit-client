import React, { useState, useEffect } from 'react'
import { PhoneCard } from '../../components'
import { usePhones } from '../../hooks'

export default function Home() {
    const { phones, error, loading } = usePhones()

    return phones && (
        <ul className="list">
            {phones.map(phone => <PhoneCard phone={phone} />)}
        </ul>
    )
}