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
        <>
            <div className="">
                {
                    dataInfo ? (
                        <div className=" w-full h-screen max-[1050px]:h-full flex flex-col justify-center items-center gap-10">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-center items-center">

                                </div>
                                <div className=" flex flex-wrap justify-between items-center max-[1050px]:justify-center max-[1050px]:w-[450px] min-[1050px]:w-[850px] border border-black w-full rounded-md p-4 bg-neutral-800 ">
                                    <div className="bg-neutral-500 w-[400px] h-[400px] flex justify-center items-center rounded-lg ">
                                        <img src={dataInfo[0].image} alt={dataInfo[0].name} width={300} height={200}></img>
                                    </div>
                                    <div className=" w-[400px] h-[400px] flex flex-wrap justify-around  rounded-lg  ">
                                        <div className=" w-1/2 flex flex-col justify-between items-center">
                                            <p className="p-4 text-4xl text-white">{dataInfo[0].name}</p>
                                            <div className="flex justify-between w-full p-4">
                                                <p className="text-white text-xl" >Type </p>
                                                <div className="flex">{dataInfo[0].apiTypes.map((item) =>
                                                    <img src={item.image} alt={item.name} width={30} height={30} />
                                                )}
                                                </div>

                                            </div>
                                        </div>
                                        <div className=" w-1/2   flex justify-end">
                                            <p className="p-4 text-2xl text-white">#{dataInfo[0].pokedexId}</p>
                                        </div>
                                        <div className="w-full p-4">
                                            <ul className=" grid grid-cols-3 w-full " >
                                                <li className=" text-white"> HP : {dataInfo[0].stats.HP}</li>
                                                <li className=" text-white"> ATT : {dataInfo[0].stats.attack}</li>
                                                <li className=" text-white" > DEF : {dataInfo[0].stats.defense}</li>
                                                <li className=" text-white"> SPATT : {dataInfo[0].stats.special_attack}</li>
                                                <li className=" text-white"> SPDEF : {dataInfo[0].stats.special_defense}</li>
                                                <li className=" text-white"> SPD : {dataInfo[0].stats.speed}</li>
                                            </ul>
                                        </div>
                                        <div className="w-full p-4">
                                            <p className=" text-white text-xl">Vulnerables </p>
                                            <ul className=" grid grid-cols-2 w-full " >
                                                {dataInfo[0].apiResistances.filter((item) => item.damage_relation === "vulnerable").map((item) => (
                                                    <li className=" text-white">{item.name} </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className=" flex flex-col justify-around items-center  max-[1050px]:w-[450px] min-[1050px]:w-[850px] border border-black rounded-md w-full p-4 bg-neutral-400 ">
                                <p className="text-white text-3xl">Evolution(s)</p>
                                <div className="flex w-full justify-around items-center">
                                    {dataPre?.length > 0 ? dataPre.map((item) => (<div className="flex flex-col justify-center items-center"><Link href={`/produit/${item.pokedexId}`}><img src={item.image} alt={item.name} width={200} height={200}></img></Link><div className="flex">{dataInfo[0].apiTypes.map((item) =>
                                        <img src={item.image} alt={item.name} width={30} height={30} />
                                    )}</div></div>)) : null}
                                    {dataEvol?.length > 0 ? dataEvol.map((item) => (<div className="flex flex-col justify-center items-center"><Link href={`/produit/${item.pokedexId}`}><img src={item.image} alt={item.name} width={200} height={200}></img></Link><div className="flex">{dataInfo[0].apiTypes.map((item) =>
                                        <img src={item.image} alt={item.name} width={30} height={30} />
                                    )}</div></div>)) : null}
                                </div>
                            </div>
                        </div>
                    ) : (<p>loading</p>)
                }
            </div>

        </>
    )
}