import { createContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [selectCity, setSelectCity] = useState(null);

    return (
        <WeatherContext.Provider value={{
            selectCity, setSelectCity
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;