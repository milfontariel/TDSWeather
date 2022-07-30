import { getGeo, getIcon, getInfo } from './api';

export async function getGeoPosition(cityName) {
    const { data } = await getGeo({
        params: {
            q: cityName
        }
    });

    return data[0];
}

export async function getLocalInfo({ lat, lon }) {
    const { data } = await getInfo({
        params: {
            lat,
            lon,
            lang: 'pt_br',
            units: 'metric',
            exclude: 'hourly,minutely,alerts'
        }
    });

    return data;
}

export async function getWeatherIcon(iconId) {
    const url = getIcon(iconId);

    return url;
}
