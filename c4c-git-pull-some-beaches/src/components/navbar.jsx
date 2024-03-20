import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav className="h-[12vh] w-full border-b-[0.25px] border-b-[#f2f2f2] flex flex-row items-center justify-between">
            <div className="float-left flex flex-row justify-between text-white cursor-pointer w-full">
                <div className=" font-bold mx-5 text-2xl">
                    For<span className="text-main-purple font-bold">Real.</span>
                </div>
                <div className="md:hidden flex flex-row items-center">
                    <div className="mx-5 cursor-pointer" onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
                <div className="hidden md:flex flex-row items-center">
                    <div className="mx-5 cursor-pointer">
                        <Link to="/">Check Image</Link>
                    </div>
                    <div className="mx-5 cursor-pointer">
                        <Link to="/audio">Check Audio</Link>
                    </div>
                    <div className="mx-5 cursor-pointer">
                        <Link to="/video">Check Video</Link>
                    </div>
                </div>
            </div>
            <div className="flex-row float-right mr-5 hidden md:flex">
                <div className="mx-5 cursor-pointer items-center flex text-white">
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <button className="bg-main-purple text-white w-[25vw] md:w-[7.5vw] h-[6.5vh] rounded-3xl">
                        <Link to="/getapi">Get API</Link>
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-black shadow-md z-10 transition-all duration-300 ${
                    showSidebar ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="text-white p-10 pt-20">
                    <div className="mb-4">
                        <Link to="/">Check Image</Link>
                    </div>
                    <div className="mb-4">
                        <Link to="/audio">Check Audio</Link>
                    </div>
                    <div className="mb-4">
                        <Link to="/video">Check Video</Link>
                    </div>
                    <div className="mb-4">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="mb-4">
                        <button className="bg-main-purple text-white w-full h-[6.5vh] rounded-3xl">
                            <Link to="/getapi">Get API</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black opacity-50 z-10 ${
                    showSidebar ? "block" : "hidden"
                }`}
                onClick={toggleSidebar}
            ></div>
        </nav>
    );
}