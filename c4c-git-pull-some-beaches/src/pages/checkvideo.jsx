import HeroImage from '../components/heroimage';
import Navbar from '../components/navbar';

export default function CheckVideo(){
    return <main className="bg-black min-h-screen w-screen">
            <Navbar />
            <HeroImage type={"video"} svgToUse={"./panda.svg"} />
        </main>
    
}
