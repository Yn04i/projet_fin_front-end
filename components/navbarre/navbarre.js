'use client'
import Link from 'next/link'
import Image from 'next/image'
import { BookHeart, Home, UserRound, UserRoundCheck, Book } from 'lucide-react';
import { useAppSelector } from '@/lib/hooks';
import title from "../../public/pokemonsvg.svg"

export default function Navbarre() {
    const Connexion = useAppSelector((state) => state.login.statusConnnexion);
    const userName = useAppSelector((state) => state.login.userName);
    return (
        <div className='w-full sticky top-0 bg-white border-b-2 border-black flex justify-between items-center px-6'>
            <div className=' flex justify-center'>
                <Link href='/' className='flex flex-col items-center'>
                    <Image className="" src={title} alt="title" width={100} height={100}></Image>
                </Link>
            </div>
            <div>
                <ul className='flex justify-end  w-full '>
                    <li className='w-20'>
                        <Link href='/produit' className='flex flex-col items-center'>
                            <Book width={30} height={100} className='hover:text-slate-500'/>
                        </Link>
                    </li>
                    <li className='w-20'>
                        <Link href='/connexion' className='flex flex-col items-center'>
                            <UserRound width={30} height={100} className='hover:text-slate-500' />
                        </Link>
                    </li>
                    <li className='w-20'>
                        <Link href='/panier' className='flex flex-col items-center'>
                            <BookHeart width={30} height={100} className='hover:text-slate-500'/>
                        </Link>
                    </li>
                    <li>
                        {Connexion ? (
                            <p>{userName}</p>
                        ) : (
                            null
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
}