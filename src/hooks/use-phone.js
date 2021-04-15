import { useState, useEffect } from 'react'
import { retrievePhoneDetails } from '../logic'

const usePhone = (href) => {
    if(typeof href !== 'string') throw new TypeError(`href ${href} is not a string`);
    if(
        href.split('/').length !== 3 ||
        href.split('/')[1] !== 'phones'
    ) throw new Error(`href ${href} is not a valid href`)

    const [phone, setPhone] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const phone = await retrievePhoneDetails(href)
                
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
