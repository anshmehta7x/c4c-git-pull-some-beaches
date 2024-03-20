import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="h-[12vh] w-full border-b-[0.25px] border-b-[#f2f2f2] flex flex-row items-center justify-between">
            <div
                className="float-left flex flex-row justify-center text-white cursor-pointer"
                Link
                to="/"
            >
                <div className=" font-bold mx-5 text-2xl">
                    For<span className="text-main-purple font-bold">Real.</span>
                </div>
                <div className="hidden md:flex flex-row items-center">
                    <div className="mx-5 cursor-pointer">
                        <Link to="/">Check Image</Link>
                    </div>
                    <div className="mx-5 cursor-pointer">
                        <Link to="/audio">Check Audio</Link>
                    </div>
                    <div className="mx-5 cursor-pointer">
                        <Link to="/video"></Link>Check Video
                    </div>
                </div>
            </div>
            <div className="flex flex-row float-right mr-5">
                <div className="mx-5 cursor-pointer items-center flex text-white">
                    <Link to="/video"></Link>About
                </div>
                <div>
                <button className="bg-main-purple text-white w-[25vw] md:w-[7.5vw] h-[6.5vh] rounded-3xl">
                    Get API
                </button>
                </div>
            </div>
        </nav>
    );
}
