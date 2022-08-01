import weatherContext from '../../hooks/useWeather';
import { useNavigate } from 'react-router-dom';
import { getLocalInfo } from '../../services/weatherService'

export default function Nav({ locationsList }) {
    const navigate = useNavigate();

    const { setSelectCity } = weatherContext();


    async function handleSelectCity(cityName) {
        try {
            const response = await getLocalInfo(cityName);
            setSelectCity(response);
            navigate('/detail');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <nav className="max-w-xs hover:cursor-pointer">
            <ul className="flex justify-around gap-4 flex-wrap p-5">
                {
                    locationsList.map(location => {
                        return (
                            <li key={location.name} title={location.country}
                                className="text-white text-center font-extralight hover:cursor-pointer 
                                            hover:underline underline-offset-4 hover:scale-110 
                                            transition-transform duration-100 ease-out text-xl">
                                <a onClick={() => handleSelectCity(location.name)}>
                                    {location.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}