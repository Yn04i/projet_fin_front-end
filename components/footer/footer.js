import { Facebook, Github, Twitter } from 'lucide-react'
export default function Footer() {
    return (
        <div className="w-full h-1/6 flex justify-center items-center flex-col bg-zinc-950">
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <p className="text-white">Contact</p>
                    <p className="text-white">+33 6 00 00 00 00</p>
                    <p className="text-white">pO8JH@example.com</p>
                </div>
                <div className='flex gap-2 text-white'>
                    <Facebook />
                    <Twitter />
                    <Github />
                </div>
            </div>
            <div>
                <p className="text-white">© 2023 - Tous droits réservés</p>
            </div>
        </div>
    )
}