import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroImage from "../components/heroimage";

export default function CheckImage(){
    return <main className="bg-[#141414] min-h-screen w-screen">
            <Navbar />
            <HeroImage/>
            <Footer/>
        </main>
    
}