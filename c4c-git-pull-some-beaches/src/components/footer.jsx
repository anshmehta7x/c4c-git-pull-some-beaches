import React, { useState } from "react";

export default function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex justify-center align-middle items-center h-10 pt-10 pb-10">
            <p className="text-white urbanist-light">
                Made with ❤️ by
                <span
                    className="hoverable-text"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {" "}
                    git pull{" "}
                </span>
                {/* <span className={isHovered ? "visible-text" : "hidden-text"}>
                    (some beaches)
                </span> */}
            </p>
        </div>
    );
}
