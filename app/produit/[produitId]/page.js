'use client'
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { fetchData, setSpriteEvol, setSpritePre, setPokemonAfficher } from "@/lib/features/pokemon/pokemonSlice"
import { useEffect } from "react"
import Link from "next/link"

export default function Page({ params }) {
    const dataInfo = useAppSelector((state) => state.pokemon.pokemons?.filter((item) => item.id === parseInt(params.produitId)))
    const data = useAppSelector((state) => state.pokemon.pokemons)
    const dataPre = useAppSelector((state) => state.pokemon.spritePre)
    const dataEvol = useAppSelector((state) => state.pokemon.spriteEvol)
    const dispatch = useAppDispatch()
    // const dataInfo = useAppSelector((state) => state.pokemon.pokemons?.filter((item) => item.id === parseInt(params.produitId)))
    useEffect(() => {
        dispatch(fetchData())
        // dispatch(setPokemonAfficher(parseInt(params.produitId)))
    }, [])
    useEffect(() => {

        dispatch(setSpritePre(data?.filter((item) => item.id === dataInfo[0].apiPreEvolution.pokedexIdd)))
        dispatch(setSpriteEvol(data?.filter((item) => item.id === (dataInfo[0].apiEvolutions.length > 0 ? dataInfo[0].apiEvolutions[0].pokedexId : null))))

    }, [data])
    console.log("info ", dataInfo);
    console.log("pre ", dataPre);
    console.log("evol ", dataEvol);
    return (
        <div>
            <div>
                {
                    dataInfo ? (
                        <div>
                            <p>{dataInfo[0].name}</p>
                            <p>{dataInfo[0].id}</p>
                            <img src={dataInfo[0].image} alt={dataInfo[0].name} width={200} height={200}></img>
                            <div>{dataInfo[0].apiTypes.map((item) =>
                                <img src={item.image} alt={item.name} width={40} height={40} />
                            )}</div>
                            <div>
                                <ul>
                                    <li>{dataInfo[0].stats.HP}</li>
                                    <li>{dataInfo[0].stats.attack}</li>
                                    <li>{dataInfo[0].stats.defense}</li>
                                    <li>{dataInfo[0].stats.special_attack}</li>
                                    <li>{dataInfo[0].stats.special_defense}</li>
                                    <li>{dataInfo[0].stats.speed}</li>
                                </ul>
                            </div>
                            <div>{dataPre?.length > 0 ? dataPre.map((item) => (<Link href={`/produit/${item.pokedexId}`}><img src={item.image} alt={item.name} width={200} height={200}></img></Link>)) : null}</div>
                            <div>{dataEvol?.length > 0 ? dataEvol.map((item) => (<Link href={`/produit/${item.pokedexId}`}><img src={item.image} alt={item.name} width={200} height={200}></img></Link>)) : null}</div>
                        </div>
                    ) : (<p>loading</p>)
                }
            </div>

        </div>
    )
}