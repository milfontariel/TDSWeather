import { getInfo } from './api';
import dayjs from 'dayjs';
import { conditions } from '../utils/locations';

export async function getLocalInfo(cityName) {
    try {
        const { data } = await getInfo({
            params: {
                q: cityName,
                dt: dayjs().format('YYYY-MM-DD')
            }
        });
        const result = formatResponse(data);
        return result;

    } catch (error) {
        throw error
    }
}

function formatResponse({ location, forecast: { forecastday: [{ day, astro, hour }] } }) {
    const now = dayjs().format('H');
    const period = !!hour[now].is_day ? 'day' : 'night';
    const currentCondition = conditions[hour[now].condition.code];

    const parsed = {
        city: location.name,
        region: location.region,
        country: location.country,
        maxTemp: day.maxtemp_c.toFixed(0),
        minTemp: day.mintemp_c.toFixed(0),
        sunrise: astro.sunrise,
        sunset: astro.sunset,
        temp: hour[now].temp_c.toFixed(0),
        isDay: !!hour[now].is_day,
        condition: {
            text: hour[now].condition.text,
            icon: `/${!!hour[now].is_day ? 'day' : 'night'}/${hour[now].condition.code}.svg`,
            code: hour[now].condition.code,
            colors: conditions.condition[period][currentCondition]
        },
        wind: ((hour[now].wind_kph * 1000) / 3600).toFixed(2) + 'm/s',
        humidity: hour[now].humidity + '%',
        cloud: hour[now].cloud,
        resume: [
            {
                title: 'dawn',
                temp: hour[3].temp_c.toFixed(0),
                condition: {
                    text: hour[3].condition.text,
                    icon: `/${!!hour[3].is_day ? 'day' : 'night'}/${hour[now].condition.code}.svg`,
                    code: hour[3].condition.code
                }
            },
            {
                title: 'morning',
                temp: hour[9].temp_c.toFixed(0),
                condition: {
                    text: hour[9].condition.text,
                    icon: `/${!!hour[9].is_day ? 'day' : 'night'}/${hour[now].condition.code}.svg`,
                    code: hour[9].condition.code
                }
            },
            {
                title: 'afternoon',
                temp: hour[15].temp_c.toFixed(0),
                condition: {
                    text: hour[15].condition.text,
                    icon: `/${!!hour[15].is_day ? 'day' : 'night'}/${hour[now].condition.code}.svg`,
                    code: hour[15].condition.code
                }
            },
            {
                title: 'night',
                temp: hour[21].temp_c.toFixed(0),
                condition: {
                    text: hour[21].condition.text,
                    icon: `/${!!hour[21].is_day ? 'day' : 'night'}/${hour[now].condition.code}.svg`,
                    code: hour[21].condition.code
                }
            },
        ]
    };

    return parsed;
}