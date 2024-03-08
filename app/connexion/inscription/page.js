'use client'
import { setUserName, setEmailSubmit, setPasswordSubmit, verifsubmit, setsubmitstatus } from "@/lib/features/login/loginSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import inscriImg from "../../../public/test.webp"

export default function Page() {
    const usedispatch = useAppDispatch();
    const statusSubmit = useAppSelector((state) => state.login.statusSubmit);
    const Router = useRouter();

    useEffect(() => {
        if (statusSubmit) {
            Router.push("/connexion")
            usedispatch(setsubmitstatus(false))
        }
    }, [statusSubmit])
    return (
        <div className="flex h-screen w-full justify-center  items-center">
            <div className="h-full w-1/2 flex justify-center items-center max-[1024px]:hidden ">
                <Image src={inscriImg} alt="title" width={400} ></Image>
            </div>
            <div className="border-2 h-2/5 w-[425px] bg-neutral-500 rounded-lg  ">
                <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                    <>
                        <h1 className="text-white text-2xl">Inscription</h1>
                        <input className="p-1 rounded-sm" type="text" placeholder="Username" onChange={e => usedispatch(setUserName(e.target.value))} />
                        <input className="p-1 rounded-sm" type="email" placeholder="Email" onChange={e => usedispatch(setEmailSubmit(e.target.value))} />
                        <input className="p-1 rounded-sm" type="password" placeholder="Password" onChange={e => usedispatch(setPasswordSubmit(e.target.value))} />
                        <input className="cursor-pointer rounded-sm bg-neutral-800 text-white w-1/3" type="submit" value="Submit" onClick={() => usedispatch(verifsubmit())} />
                    </>
                </div>
            </div>
        </div>
    )
}