import { useContext } from "react";
import WeatherContext from "../contexts/weatherContext";

export default function useWeather() {
    return useContext(WeatherContext);
}