'use client'
import { checkout, deletePanier } from "@/lib/features/panier/panier";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
export default function Page() {
    const dispatch = useAppDispatch();
    const panier = useAppSelector((state) => state.panier.panier)
    console.log(panier);
    return (
        <div>
            <h1>Favoris</h1>
            <div className="flex flex-col">
                {panier.map((item,index)=> 
                
                    <div key={index}>
                        <p>{item.name}</p>
                        <button onClick={() => dispatch(deletePanier(item))}>supprimer</button>
                    </div>
                )}
            </div>
            <div>{panier.length > 0 ? <button onClick={() => dispatch(checkout())}>checkout</button> : null }</div>
        </div>
    )
}