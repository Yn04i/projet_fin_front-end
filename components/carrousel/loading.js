import loading from "../../public/simple_pokeball.gif"
import Image from "next/image"
export default function Loading() {
    return (
        <>
            <div className="flex justify-center items-center h-full w-full">
                <Image src={loading} alt="loading" className="w-1/3" ></Image>
            </div>
        </>
    )
}