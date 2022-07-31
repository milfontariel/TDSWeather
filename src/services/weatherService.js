import { getInfo } from './api';
import dayjs from 'dayjs';

export async function getLocalInfo(cityName) {
    const { data } = await getInfo({
        params: {
            lang: 'pt',
            q: cityName,
            dt: dayjs().format('YYYY-MM-DD')
        }
    });

    const result = formatResponse(data);
    return result;
}

function formatResponse({ location, forecast: { forecastday: [{ day, astro, hour }] } }) {
    const now = dayjs().format('H');
    const parsed = {
        city: location.name,
        region: location.region,
        country: location.country,
        maxTemp: day.maxtemp_c,
        minTemp: day.mintemp_c,
        sunrise: astro.sunrise,
        sunset: astro.sunset,
        temp: hour[now].temp_c,
        isDay: !!hour[now].is_day,
        condition: {
            text: hour[now].condition.text,
            icon: hour[now].condition.icon,
            code: hour[now].condition.code
        },
        wind: ((hour[now].wind_kph * 1000) / 3600).toFixed(2) + 'm/s',
        humidity: hour[now].humidity,
        cloud: hour[now].cloud,
        resume: [
            {
                title: 'dawn',
                temp: hour[3].temp_c,
                condition: {
                    text: hour[3].condition.text,
                    icon: hour[3].condition.icon,
                    code: hour[3].condition.code
                }
            },
            {
                title: 'morning',
                temp: hour[9].temp_c,
                condition: {
                    text: hour[9].condition.text,
                    icon: hour[9].condition.icon,
                    code: hour[9].condition.code
                }
            },
            {
                title: 'afternoon',
                temp: hour[15].temp_c,
                condition: {
                    text: hour[15].condition.text,
                    icon: hour[15].condition.icon,
                    code: hour[15].condition.code
                }
            },
            {
                title: 'night',
                temp: hour[21].temp_c,
                condition: {
                    text: hour[21].condition.text,
                    icon: hour[21].condition.icon,
                    code: hour[21].condition.code
                }
            },
        ]
    };

    return parsed;
}