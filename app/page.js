'use client'
import Caroussel from "@/components/carrousel/caroussel"
import Image from "next/image"
import home from "../public/home.jpeg"
import pika from "../public/pika.png"
import actu1 from "../public/actu1.jpeg"
import actu2 from "../public/actu2.png"
import actu3 from "../public/actu3.png"
export default function PageAcceuil() {
  return (
    <div className="flex flex-col ">
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-zinc-900 to-zinc-800  ">
        <div className="w-full px-10 max-[770px]:px-0 max-[770px]:flex max-[770px]:justify-center ">
          <h1 className="text-white text-xl w-1/5 py-4 border-2 border-t-0 rounded-br-lg rounded-bl-lg flex justify-center max-[600px]:w-full  max-[770px]:w-3/5 max-[1024px]:w-1/3  ">Pokémon à l'affiche</h1>
        </div>
        <Caroussel />
      </div>
      <div className="w-full flex flex-wrap justify-around">
        <div className="w-[420px] flex justify-center  ">
          <Image className=" bg-white " src={pika} alt="title"></Image>
        </div>
        <div className="w-[420px] flex justify-center items-center flex-col p-4">
          <div className="w-full h-full">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[300px] bg-red-700 rounded-md">
                <Image src={actu1} alt="title" className="w-[300px] rounded-t-md"></Image>
                <h1 className=" text-white text-xl text-center" >Explorez une nouvelle collection de pokemons</h1>
                <p className="text-center text-white text-sm">
                  Amusez-vous à collectionner des cartes du Jeu de Cartes à Collectionner (JCC) Pokémon avec le Jeu de Cartes à Collectionner Pokémon Pocket.</p>
              </div>
            </div>
          </div>
          <h1 className="text-xl"> Quoi de neuf cette semaine</h1>
          <div className="w-full h-full flex justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center w-[200px] bg-green-600 border border-green-600 rounded-md">
              <Image src={actu2} alt="title" className="rounded-t-md h-40"></Image>
              <p className="text-center text-white text-sm">
                Les éléments vont se déchaîner ! Primo-Kyogre et Primo-Groudon seront présents dans le monde entier pour de nouvelles Journées de Raids.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[200px] bg-violet-700 border border-violet-700 rounded-md">
              <Image src={actu3} alt="title" className="rounded-t-md h-40"></Image>
              <h1 className="text-white text-lg text-center">Pokémon Épée et Bouclier : dernière mise à jour des Raids Dynamax</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}