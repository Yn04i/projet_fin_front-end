'use client'
import { setUserName, setEmailSubmit, setPasswordSubmit, verifsubmit, setsubmitstatus } from "@/lib/features/login/loginSlice";
import { useAppDispatch, useAppSelector  } from "@/lib/hooks"
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Page() {
    const usedispatch = useAppDispatch();
    const statusSubmit = useAppSelector((state) => state.login.statusSubmit);
    const Router = useRouter();

    useEffect(() => {
        if(statusSubmit) {
            Router.push("/connexion")
            usedispatch(setsubmitstatus(false))
        }
    }, [statusSubmit])
    return (
        <div>
            <h1>Inscription</h1>
            <input type="text" placeholder="Username" onChange={e => usedispatch(setUserName(e.target.value))} />
            <input type="email" placeholder="Email" onChange={e => usedispatch(setEmailSubmit(e.target.value))} />
            <input type="password" placeholder="Password" onChange={e => usedispatch(setPasswordSubmit(e.target.value))} />
            <input type="submit" value="Submit" onClick={() => usedispatch(verifsubmit())} />
        </div>
    )
}