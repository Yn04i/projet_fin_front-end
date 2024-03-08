'use client'
import Card from "@/components/card/card"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect } from "react"
import { fetchData, filter, typePokemon } from "@/lib/features/pokemon/pokemonSlice"
import Loading from "../loading"
export default function Page() {
    const data = useAppSelector((state) => state.pokemon.pokemons)
    const dataType = useAppSelector((state) => state.pokemon.typeData)
    const type = useAppSelector((state) => state.pokemon.typePokemon)
    const panier = useAppSelector((state) => state.panier.panier)
    console.log(panier);

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    console.log(type);
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-3xl font-bold dark:text-white">Pokedex</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="p-7">
                    <input className="p-1 dark:border-white rounded-sm border-2 border-neutral-700 dark:placeholder:text-white bg-neutral-300 outline-none" type="text" placeholder="recherche" onChange={e => dispatch(filter(e.target.value))} />
                </div>
                <div className="p-7">
                    <select className="p-1 rounded-sm dark:border-white border-2 border-neutral-700 bg-neutral-300 outline-none" onChange={e => dispatch(typePokemon(e.target.value))}>
                        <option value="all" >All</option>
                        {dataType?.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex items-start justify-center overflow-y-scroll">
                    <div>
                        <div className="flex flex-wrap justify-center w-full h-[800px]  items-center gap-6 ">

                            {data === null ? <Loading /> :
                                data.map((item) => (
                                    <Card
                                        key={item.id}
                                        name={item.name}
                                        pokedexId={item.id}
                                        image={item.image}
                                        apiTypes={item.apiTypes}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}