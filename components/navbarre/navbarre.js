'use client'
import Link from 'next/link'
import Image from 'next/image'
import { BookHeart, UserRound, UserRoundCheck, Book ,PowerCircle } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import title from "../../public/pokemonsvg.svg"
import title2 from "../../public/pokemonsvg-blanc.svg"
import { toggleDark } from '@/lib/features/darkMode/darkSlice';



export default function Navbarre() {
    const Connexion = useAppSelector((state) => state.login.statusConnnexion);
    const userName = useAppSelector((state) => state.login.userName);
    const panier = useAppSelector((state) => state.panier.panier);
    const darkMode = useAppSelector((state) => state.dark.dark);
    const dispatch = useAppDispatch();

    return (
        <div className='w-full sticky top-0 bg-white dark:bg-neutral-900 border-b-2 border-black dark:border-white flex justify-between items-center px-6 z-50'>
            <div className=' flex justify-center'>
                <Link href='/' className='flex flex-col items-center'>
                    {
                        darkMode ? <Image src={title2} alt="title" width={100} height={100} /> : <Image src={title} alt="title" width={100} height={100} />
                    }
                </Link>
            </div>
            <div>
                <ul className='flex justify-end  w-full '>
                    <li className='w-20'>
                        <Link href='/produit' className='flex flex-col items-center dark:text-white'>
                            <Book width={30} height={100} className='hover:text-slate-500' />
                        </Link>
                    </li>
                    <li className='w-20'>
                        <Link href='/connexion' className='flex flex-col items-center'>
                            {
                                Connexion ? (
                                    <UserRoundCheck width={30} height={100} className='hover:text-slate-500 dark:text-white' />
                                ) : (
                                    <UserRound width={30} height={100} className='hover:text-slate-500 dark:text-white' />
                                )
                            }
                        </Link>
                    </li>
                    <li className='w-20'>
                        <Link href='/panier' className='flex justify-center items-center relative'>
                            <BookHeart width={30} height={100} className='hover:text-slate-500 dark:text-white' />
                            {panier.length > 0 ? <p className='text-xs absolute text-white dark:text-black right-5 top-7 bg-black dark:bg-white rounded-full flex h-3 w-3 justify-center items-center p-2 '> {panier.length}</p> : null}
                        </Link>
                    </li>
                    <li className='w-20'>
                        <div href='/panier' className='flex justify-center items-center relative'>
                            <PowerCircle width={30} height={100} className=' cursor-pointer dark:text-white' onClick={() => dispatch(toggleDark())}/>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}