import React, { useState } from "react";

export default function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex justify-center align-middle items-center h-10 pt-10 pb-10">
            <div className="md:flex flex-row items-center">
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
    );
}
