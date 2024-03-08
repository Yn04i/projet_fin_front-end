'use client'
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setEmail, setPassword, verify, setStatus, toggleConnexion } from "@/lib/features/login/loginSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import inscriImg from "../../public/test.webp"
export default function Page() {
    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.login.status);
    const Connexion = useAppSelector((state) => state.login.statusConnnexion);
    const Router = useRouter();
    useEffect(() => {
        if (status) {
            Router.push("/")
            dispatch(setStatus(false))
            dispatch(toggleConnexion(true))
        }
    }, [status])
    console.log(Connexion);
    return (
        <div className="flex h-screen w-full justify-center  items-center">
            <div className="h-full w-1/2 flex justify-center items-center max-[1024px]:hidden ">
                <Image src={inscriImg} alt="title" width={400} ></Image>
            </div>
            <div className="border-2 h-2/5 w-[425px] bg-neutral-500 rounded-lg  ">
                <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                    {Connexion === true ? 
                    <>
                    <h1>Connecter</h1>
                        <button className="cursor-pointer border border-white text-white bg-neutral-800 hover:bg-neutral-600 rounded-sm p-1 " onClick={() => dispatch(toggleConnexion(false))}>Deconnexion</button>
                    </>
                    : (
                        <>
                            <h1 className="text-white text-2xl">Connexion</h1>
                            <div className="flex flex-col h-1/2 w-1/2 gap-5 justify-center items-center">
                                <input className="p-1 rounded-sm" type="email" placeholder="Email" onChange={e => dispatch(setEmail(e.target.value))} />
                                <input className="p-1 rounded-sm" type="password" placeholder="Password" onChange={e => dispatch(setPassword(e.target.value))} />
                                <input className="cursor-pointer rounded-sm bg-neutral-800 text-white w-1/2" type="submit" value="Submit" onClick={() => dispatch(verify())} />
                                <button className="cursor-pointer" onClick={() => Router.push("/connexion/inscription")}>sign in</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}