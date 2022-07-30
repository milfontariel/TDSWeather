export default function Nav({ locationsList }) {
    return (
        <nav className="w-full hover:cursor-pointer">
            <ul className="flex justify-around gap-4 flex-wrap p-5">
                {
                    locationsList.map(location => {
                        return (
                            <li key={location.name}
                                className="text-white text-xl font-extralight hover:cursor-pointer 
                                            hover:underline underline-offset-4 hover:scale-110 transition-transform
                                            duration-200 ease-in-out">
                                <a onClick={() => console.log(location.lat, location.lon)}>{location.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}