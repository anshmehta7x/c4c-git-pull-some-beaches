import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <footer className="fixed bottom-0 w-screen h-20 border-t-2 border-white flex justify-center items-center md:hidden">
            <div className="flex flex-row items-center justify-center text-white">
                <div className="mx-5"><Link to="/">Check Image</Link></div>
                <div className="mx-5"><Link to="/audio">Check Audio</Link></div>
                <div className="mx-5"><Link to="/video"></Link>Check Video</div>
            </div>
        </footer>

    )
}