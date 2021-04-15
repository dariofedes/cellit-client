import { API_URL } from '../constants'
import axios from 'axios'

export default async function retrievePhones() {
    const phones = await axios.get(`${API_URL}/phones`)

    return phones.data
}