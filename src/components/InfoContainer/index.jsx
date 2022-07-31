export default function InfoContainer({ children }) {
    return (
        <div className="w-full h-full sm:w-2/3 lg:w-3/5 xl:w-2/4 pt-10 px-4 flex flex-col justify-center items-center gap-10">
            {children}
        </div>
    )
}