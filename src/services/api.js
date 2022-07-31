import axios from 'axios';

const getInfo = axios.create({
    method: 'get',
    baseURL: import.meta.env.VITE_BASE_URL,
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})

export {
    getInfo,
}