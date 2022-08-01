import { useEffect } from 'react';
import weatherContext from '../../hooks/useWeather';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import InfoContainer from '../InfoContainer';
import { FaArrowLeft } from 'react-icons/fa';
import CityInfo from '../CityInfo';

export default function WeatherInfo() {
    const { selectCity, setSelectCity } = weatherContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (selectCity === null) {
            navigate('/');
        }
    }, [selectCity])

    function handleReturn() {
        setSelectCity(null);
    }

    const colors = [
        {
            from: '#E0E0E0',
            to: '#A6A6A6'
        },
        {
            from: '#616978',
            to: '#3C4353'
        },
        {
            from: '#57CBDC',
            to: '#3BA1B6'
        },
    ]

    if (selectCity) {
        const { colors } = selectCity.condition;
        const main = colors.main ? colors.main : '#ffffff';
        return (
            <Container primary={colors.primary} secondary={colors.secondary} main={main}>
                <InfoContainer>
                    <FaArrowLeft
                        className="absolute left-4 top-5 cursor-pointer"
                        onClick={handleReturn}
                        size="1.8rem"
                        title='Return'
                    />
                    <CityInfo color={main} data={selectCity} />
                </InfoContainer>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    color: ${props => props.main};
    background: ${props => props.primary};
    background: ${`linear-gradient(140deg, ${props => props.primary} 0%, ${props => props.secondary} 100%)`};
    padding: 1rem;
    display: flex;
    justify-content: center;
`;