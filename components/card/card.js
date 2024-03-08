'use client'
import { useRouter } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { addPanier } from "@/lib/features/panier/panier"
export default function Card(props) {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const Connexion = useAppSelector((state) => state.login.statusConnnexion);

    return (
        <div className="w-[350px] sm:w-[300px] sm:h-[430px] md:w-[250px] flex flex-col justify-between overflow-hidden ">

            <div onClick={() => router.push(`/produit/${props.pokedexId}`)} className="w-[350px] h-[420px] sm:w-[300px] sm:h-[400px] md:w-[250px] flex flex-col justify-between hover:-translate-y-1 hover:animate-in border-2 border-black  cursor-pointer">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="w-full h-[300px] flex justify-center items-center bg-neutral-600 relative">
                        <h1 className="text-neutral-500 top-0 w-full h-full flex text-[150px]">{props.pokedexId}</h1>
                        <img className="w-[340px] absolute" src={props.image} alt="image" ></img>
                    </div>
                    <div className="w-full h-[120px]  flex flex-col p-2 justify-around bg-neutral-800 ">
                        <div className="flex justify-between">
                            <p className="text-white">{props.name}</p>
                            <p className="text-white">#{props.pokedexId}</p>
                        </div>
                        <div className="flex flex-wrap">{props.apiTypes.map((item, index) =>
                            <p className="flex" key={index}><img className="w-5" src={item.image}></img></p>
                        )}</div>
                    </div>
                </div>
            </div>
            { 
                Connexion ?<button className=" bg-neutral-800 text-white hover:bg-neutral-600" onClick={() => dispatch(addPanier(props))} >add</button> : null
            }        
            </div>
    )
}