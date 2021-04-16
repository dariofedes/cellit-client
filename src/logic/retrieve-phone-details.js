import { API_URL } from '../constants'
import axios from 'axios'

export default function retrievePhoneDetails(phoneId) {
    if(typeof phoneId !== 'string') throw new TypeError(`id ${phoneId} is not a string`)

    return (async () => {
        const phoneDetails = await axios.get(`${API_URL}/phones/${phoneId}`)

        return phoneDetails.data
    })()
}