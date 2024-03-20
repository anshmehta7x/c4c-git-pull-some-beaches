import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="h-[12vh] border-b-2 border-b-white flex flex-row items-center">
            <div className="float-left flex flex-row justify-center text-white ">
                <div className=" font-bold mx-5 text-2xl">For<span className="text-new-blue font-bold">Real.</span></div>
                <div className=" hidden md:flex  flex-row items-center">
                    <div className="mx-5"><Link to="/">Check Image</Link></div>
                    <div className="mx-5"><Link to="/audio">Check Audio</Link></div>
                    <div className="mx-5"><Link to="/video"></Link>Check Video</div>

                </div>
            </div>
        </nav>
    )
}