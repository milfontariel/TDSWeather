import styled from "styled-components";

export default function Temperature({ color, current, min, max, icon }) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 h-24">
                <div>
                    <p className="text-8xl font-bold">{current}</p>
                </div>
                <div className="flex flex-col h-full justify-between py-2">
                    <div className="flex justify-end text-xl">°C</div>
                    <div>
                        <p>⭡ {max}°</p>
                        <p>⭣ {min}°</p>
                    </div>
                </div>
            </div>
            <Img color={color} img={icon} />
        </div>
    );
}

export const Img = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${props => props.color};
    -webkit-mask: url(${props => props.img}) no-repeat center / contain;
    mask: url(${props => props.img}) no-repeat center / contain;
`;