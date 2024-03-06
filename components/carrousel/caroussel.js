'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect } from "react"
import { fetchData, addCarousel } from "@/lib/features/pokemon/pokemonSlice"
import Loading from "./loading"
export default function Caroussel() {
    const data = useAppSelector((state) => state.pokemon.pokemons)
    const dataCarousel = useAppSelector((state) => state.pokemon.dataCarousel)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])


    console.log(data);
    console.log(dataCarousel);
    return (
        <div className=" flex justify-center w-full h-full">
            {dataCarousel.length === 0 ? <Loading className="w-full h-full" /> :
                <Carousel className=" flex justify-center items-center w-5/6">
                    <CarouselContent>
                        {dataCarousel.map((item) => (
                            <CarouselItem key={item.id} className="flex justify-center items-center flex-col h-full">
                                <div className="flex justify-center items-center flex-col" >
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-white text-2xl pt-5">{item?.name}</p>
                                        <p className="flex">{item.apiTypes.map((item, index) => <img key={index} className="w-5" src={item.image}></img>)}</p>
                                    </div>
                                    <div className="relative flex justify-center items-center">
                                        <div className="flex flex-col justify-center items-center absolute ">
                                            <img
                                                src={item?.image}
                                                alt={item?.name}
                                                className="h-60 w-60 "
                                            />
                                        </div>
                                        <h1 className="text-white text-[300px]">{item?.pokedexId}</h1>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="" />
                    <CarouselNext className="" />
                </Carousel>}
        </div>
    )
}