'use client'
import tozz from "../public/toz.jpeg"
import Image from "next/image"
import { useRouter } from "next/navigation"
export default function NotFound() {
    const router = useRouter()
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl dark:text-white">Page introuvable</h1>
            <p onClick={() => router.push("/")} className="cursor-pointer dark:text-white">Retourner sur la page d'accueil</p>
            <Image src={tozz} alt="title" className="w-5/6 h-5/6"></Image>
        </div>
    )
}