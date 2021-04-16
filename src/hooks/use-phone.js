import { useState, useEffect } from 'react'
import { retrievePhoneDetails } from '../logic'

const usePhone = (phoneId) => {
    if(typeof phoneId !== 'string') throw new TypeError(`id ${phoneId} is not a string`);

    const [phone, setPhone] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const phone = await retrievePhoneDetails(phoneId)
                
                setPhone(phone)
                setLoading(false)
            } catch(error) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [])

    return {
        phone,
        error,
        loading,
    }
}

export default usePhone
