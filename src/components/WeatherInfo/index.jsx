import { useEffect } from 'react';
import weatherContext from '../../hooks/useWeather';
import { useNavigate } from 'react-router-dom'

export default function WeatherInfo() {
    const { selectCity, setSelectCity } = weatherContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (selectCity === null) {
            navigate('/');
        }
        console.log(selectCity);
    }, [selectCity])

    if (selectCity) {
        return (
            <>
                <button onClick={() => setSelectCity(null)}>CLICK</button>
            </>
        )
    }
}