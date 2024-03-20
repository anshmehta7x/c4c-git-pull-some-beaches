import HeroImage from "../components/heroimage";
import Navbar from "../components/navbar";

export default function CheckAudio(){
    return <main className="bg-main-bg min-h-screen w-screen">
            <Navbar />
            <HeroImage type={"audio"} svgToUse={"./panda.svg"} />
        </main>
    
}