import axios from 'axios';

const getInfo = axios.create({
    method: 'get',
    baseURL: process.env.VITE_BASE_URL,
    params: {
        key: process.env.VITE_API_KEY
    }
})

export {
    getInfo,
}