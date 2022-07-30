export default function Title({ title, subtitle, color }) {
    return (
        <div className={`text-${color || 'white'} text-center tracking-wider`}>
            <h1 className="font-light text-4xl uppercase">{title}</h1>
            <h2 className="font-thin text-xl lowercase">{subtitle}</h2>
        </div>
    )
}