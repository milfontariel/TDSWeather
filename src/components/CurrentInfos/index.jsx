export default function CurrentInfos({ sunrise, sunset, humidity, wind }) {

    return (
        <div className="w-full flex justify-between items-center mt-12">
            <TitleAndInfo title="wind speed" info={wind} />
            <Spacer />
            <TitleAndInfo title="sunrise" info={sunrise} />
            <Spacer />
            <TitleAndInfo title="sunset" info={sunset} />
            <Spacer />
            <TitleAndInfo title="humidity" info={humidity} />
        </div>
    );
}
function TitleAndInfo({ title, info }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-extralight">{title}</p>
            <p className="text-xs font-light">{info}</p>
        </div>
    );
}
function Spacer() {
    return (
        <div className={`h-6 border-l-[1px]`}></div>
    )
}