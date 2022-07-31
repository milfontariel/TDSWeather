export default function ConditionResume({ condition: { condition, temp, title } }) {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-sm font-light">{title}</p>
            <img src={condition.icon} width={40} />
            <p className="font-light tracking-wider">{temp}°C</p>
        </div>
    )
}