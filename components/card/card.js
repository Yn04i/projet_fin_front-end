'use client'
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/lib/hooks"
import { addPanier } from "@/lib/features/panier/panier"
export default function Card(props) {
    const router = useRouter()
    const dispatch = useAppDispatch()
    return (
        <>

            <div onClick={() => router.push(`/produit/${props.pokedexId}`)} className="w-[350px] h-[420px] sm:w-[300px] sm:h-[400px] md:w-[250px] flex flex-col justify-between hover:-translate-y-1 hover:animate-in ">
                <div className="w-full h-[300px] flex justify-center items-center bg-slate-700">
                    <img className="w-[340px]" src={props.image} alt="image" ></img>
                </div>
                <div className="w-full h-[120px]  flex flex-col p-2 justify-between ">

                    <p> n° {props.pokedexId}</p>
                    <p>{props.name}</p>
                    <div className="flex flex-wrap">{props.apiTypes.map((item, index) =>
                        <p className="flex" key={index}><img className="w-5" src={item.image}></img></p>
                    )}</div>

                </div>
            </div>
            <button onClick={() => dispatch(addPanier(props))} >add</button>
        </>
    )
}