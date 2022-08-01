import CurrentInfos from "../CurrentInfos";
import Resume from "../Resume";
import Temperature from "../Temperature";
import Title from "../Title";

export default function CityInfo({ color, data }) {
    return (
        <div className="flex flex-col gap-4 w-full max-w-lg select-none">
            <Title color="black" title={data.city} subtitle={data.condition.text} />
            <Temperature
                current={data.temp}
                min={data.minTemp}
                max={data.maxTemp}
                icon={data.condition.icon}
                color={color}
            />
            <Resume color={color} resume={data.resume} />
            <CurrentInfos
                sunrise={data.sunrise}
                sunset={data.sunset}
                humidity={data.humidity}
                wind={data.wind}
            />
        </div>
    )
}