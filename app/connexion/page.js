'use client'
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setEmail, setPassword,verify,setStatus, toggleConnexion} from "@/lib/features/login/loginSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Page() {
    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.login.status);
    const Connexion = useAppSelector((state) => state.login.statusConnnexion);
    const Router = useRouter();
    useEffect(() => {
        if(status) {
            Router.push("/")
            dispatch(setStatus(false))
            dispatch(toggleConnexion(true))
        }
    }, [status])
    console.log(Connexion);
    return (
        <div>
            <h1>Connexion</h1>
            <button onClick={()=> Router.push("/connexion/inscription")}>sign in</button>
            <input type="email" placeholder="Email" onChange={e => dispatch(setEmail(e.target.value))}  />
            <input type="password" placeholder="Password" onChange={e => dispatch(setPassword(e.target.value))} />
            <input type="submit" value="Submit" onClick={() => dispatch(verify())} />
            <div>
                {Connexion === true ? <h1>Connecter</h1> : null}
            </div>
        </div>
    )
}