import React from "react";
import HeroImage from "../components/heroimage";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function CheckAudio() {
    const svgPaths = [
        "/audioPage/audioOne.svg",
        "/audioPage/audioTwo.svg",
        "/audioPage/audioThree.svg",
        "/audioPage/audioFour.svg",
        "/audioPage/audioFive.svg",
        "/audioPage/audioSix.svg",
        "/audioPage/audioSeven.svg",
        "/audioPage/audioEight.svg",
        "/audioPage/audioNine.svg",
    ];

    // Function to select a random SVG path
    const getRandomSVG = () => {
        const randomIndex = Math.floor(Math.random() * svgPaths.length);
        return svgPaths[randomIndex];
    };

    return (
        <main className="bg-main-bg bg-background min-h-screen w-screen">
            <Navbar />
            <HeroImage type={"audio"} svgToUse={getRandomSVG()} />
        </main>
    );
}
