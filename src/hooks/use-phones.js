import { useState, useEffect } from 'react'
import { retrievePhones } from '../logic'

const usePhones = () => {
    const [phones, setPhones] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useState(() => {
        (async () => {
            try {
                const phones = await retrievePhones()

                setPhones(phones)
                setLoading(false)
            } catch(error) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [])

    return {
        phones,
        error,
        loading,
    }
}

export default usePhones
