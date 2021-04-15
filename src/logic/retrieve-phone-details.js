import { API_URL } from '../constants'
import axios from 'axios'

export default function retrievePhoneDetails(href) {
    if(typeof href !== 'string') throw new TypeError(`href ${href} is not a string`)
    if(
        href.split('/').length !== 3 ||
        href.split('/')[1] !== 'phones'
    ) throw new Error(`href ${href} is not a valid href`);

    return (async () => {
        const phoneDetails = await axios.get(`${API_URL}${href}`)

        return phoneDetails.data
    })()
}