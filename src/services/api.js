import axios from 'axios';

const getInfo = axios.create({
    method: 'get',
    baseURL: import.meta.env.VITE_BASE_URL,
    params: {
        appid: import.meta.env.VITE_API_KEY
    }
})

const getGeo = axios.create({
    method: 'get',
    baseURL: import.meta.env.VITE_GEO_URL,
    params: {
        appid: import.meta.env.VITE_API_KEY
    }
})

function getIcon(iconId) {
    return `${import.meta.env.VITE_IMG_URL}${iconId}@2x.png`
}

export {
    getGeo,
    getIcon,
    getInfo,
}