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
                                <div className="relative w-60 h-70 flex justify-center items-center flex-col" >
                                    <img
                                        src={item?.image}
                                        alt={item?.name}
                                        className="w-60 h-60 absolute "
                                    />
                                    <h1 className="text-white text-[350px]">{item?.pokedexId}</h1>
                                </div>
                                <p className="text-white text-2xl">{item?.name}</p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="rounded-none h-full" />
                    <CarouselNext className="rounded-none h-full" />
                </Carousel>}
        </div>
    )
}