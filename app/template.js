'use client'
import Navbarre from "@/components/navbarre/navbarre"
import Footer from "@/components/footer/footer"
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

export default function Template({ children }) {
    const darkMode = useAppSelector((state) => state.dark.dark);
    return (
        <div className={darkMode ? "dark" : ""}>

            <div className="w-screen bg-gradient-to-b from-zinc-900 via-zinc-800  to-white flex flex-col justify-center items-center">
                <Navbarre />
                <div className="bg-white dark:bg-neutral-900 w-screen sm:w-5/6  ">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

