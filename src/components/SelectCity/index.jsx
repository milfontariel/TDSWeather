import Title from "../Title";
import { IoEarthOutline } from 'react-icons/io5';
import Nav from "../Nav";
import { locationsList } from '../../utils/locations';

export default function SelectCity() {
    return (
        <div className="w-full sm:w-2/3 lg:w-3/5 xl:w-2/4 p-5 flex flex-col items-center gap-10">
            <Title title='WEATHER' subtitle='select a city' color={'white'} />
            <IoEarthOutline fill="#ffffff" stroke="#ffffff" size={200} />
            <Nav locationsList={locationsList} />
        </div>
    )
}