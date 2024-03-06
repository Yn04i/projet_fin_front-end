'use client'
import Caroussel from "@/components/carrousel/caroussel"
import Image from "next/image"
import home from "../public/home.jpeg"
import pika from "../public/pika.png"
export default function PageAcceuil() {
  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-center items-center bg-zinc-900">
        <Caroussel />
      </div>
      <div className="w-full border-red-800 flex">
        <div className="w-2/5 flex justify-center">
          <Image className=" bg-white " src={pika} alt="title"></Image>
        </div>
        <div className="w-3/5  flex justify-center items-center">
          <Image className="w-2/3  " src={home} alt="home"></Image>
        </div>
      </div>
    </div>
  )
}