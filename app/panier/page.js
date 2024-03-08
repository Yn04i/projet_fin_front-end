'use client'
import { checkout, deletePanier } from "@/lib/features/panier/panier";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { Unplug, Trash2 } from "lucide-react"
export default function Page() {
    const dispatch = useAppDispatch();
    const panier = useAppSelector((state) => state.panier.panier)
    const status = useAppSelector((state) => state.login.statusConnnexion)
    console.log(status);
    return (
        <div className="flex flex-col justify-center items-center 
        ">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="text-3xl font-bold dark:text-white ">Favoris</h1>
            </div>
            {status ? (panier.length > 0 ? (<>
                <div className="flex flex-col justify-start items-center h-screen gap-5 w-full border overflow-y-scroll py-16">
                    {panier.map((item, index) =>

                        <div className="flex justify-between w-5/6 border-2 border-black items-center pr-3" key={index}>
                            <img src={item.image} alt="image" width={100} height={200}></img>
                            <p>{item.pokedexId}</p>
                            <p>{item.name}</p>
                            <button onClick={() => dispatch(deletePanier(item))}><Trash2 /></button>
                        </div>
                    )}
                </div>
                <div>{panier.length > 0 ? <button onClick={() => dispatch(checkout())}>checkout</button> : null}</div>
            </>) : (
                <div className="flex flex-col justify-start items-center h-screen gap-5 w-full border overflow-y-scroll py-16">
                    <div className="text-3xl dark:text-white">panier vide</div>
                </div>
            )) :
                <div className="flex flex-col justify-start items-center h-screen gap-5 w-full border overflow-y-scroll py-16">

                    <div className="text-3xl flex flex-col justify-center items-center gap-10 ">
                        <p className="text-3xl dark:text-white">
                            Veuillez vous connecter
                        </p>
                        <Unplug className="w-20 h-20 dark:text-white" />
                    </div>

                </div>}
        </div>

    )
}