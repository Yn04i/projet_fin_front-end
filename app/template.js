import Navbarre from "@/components/navbarre/navbarre"
import Footer from "@/components/footer/footer"

export default function Template({ children }) {
    return (
        <div className="w-screen bg-gradient-to-b from-zinc-900 via-zinc-800  to-white flex flex-col justify-center items-center">
            <Navbarre />
            <div className="bg-white w-screen sm:w-5/6  ">
                {children}
            </div>
            <Footer />
        </div>
    )
}

