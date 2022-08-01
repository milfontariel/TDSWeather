import styled from "styled-components";
import { Outlet } from 'react-router-dom';

export default function Main() {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0F0F0F;
    display: flex;
    justify-content: center;
    align-items: center;
`;