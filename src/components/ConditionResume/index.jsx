import styled from "styled-components";

export default function ConditionResume({ color, condition: { condition, temp, title } }) {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-sm font-light">{title}</p>
            <Img color={color} img={condition.icon} />
            <p className="font-light tracking-wider">{temp}°C</p>
        </div>
    )
}

export const Img = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${props => props.color};
    -webkit-mask: url(${props => props.img}) no-repeat center / contain;
    mask: url(${props => props.img}) no-repeat center / contain;
`;