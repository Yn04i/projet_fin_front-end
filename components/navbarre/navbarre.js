'use client'
import Link from 'next/link'
import Image from 'next/image'
import { BookHeart, UserRound, UserRoundCheck, Book } from 'lucide-react';
import { useAppSelector } from '@/lib/hooks';
import title from "../../public/pokemonsvg.svg"


export default function Navbarre() {
    const Connexion = useAppSelector((state) => state.login.statusConnnexion);
    const userName = useAppSelector((state) => state.login.userName);
    const panier = useAppSelector((state) => state.panier.panier);

    return (
        <div className='w-full sticky top-0 bg-white border-b-2 border-black flex justify-between items-center px-6 z-50'>
            <div className=' flex justify-center'>
                <Link href='/' className='flex flex-col items-center'>
                    <Image className="" src={title} alt="title" width={100} height={100}></Image>
                </Link>
            </div>
            <div>
                <ul className='flex justify-end  w-full '>
                    <li className='w-20'>
                        <Link href='/produit' className='flex flex-col items-center'>
                            <Book width={30} height={100} className='hover:text-slate-500' />
                        </Link>
                    </li>
                    <li className='w-20'>
                        <Link href='/connexion' className='flex flex-col items-center'>
                            {
                                Connexion ? (
                                    <UserRoundCheck width={30} height={100} className='hover:text-slate-500' />
                                ) : (
                                    <UserRound width={30} height={100} className='hover:text-slate-500' />
                                )
                            }
                        </Link>
                    </li>
                    <li className='w-20'>
                        <Link href='/panier' className='flex justify-center items-center relative'>
                            <BookHeart width={30} height={100} className='hover:text-slate-500' />
                            {panier.length > 0 ? <p className='text-xs absolute text-white right-5 top-7 bg-black rounded-full flex h-3 w-3 justify-center items-center p-2 '> {panier.length}</p> : null}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}