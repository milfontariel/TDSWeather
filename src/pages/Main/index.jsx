import styled from "styled-components"
import SelectCity from "../../components/SelectCity";
import Title from "../../components/Title";

export default function Main() {
    return (
        <Container>
            <SelectCity />
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