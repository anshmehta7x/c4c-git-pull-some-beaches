import Navbar from "../components/navbar";
//import Footer from "../components/footer";
import HeroImage from "../components/heroimage";

export default function CheckImage() {
    return (
        <main className="bg-main-bg min-h-screen w-screen">
            <Navbar />
            <HeroImage type={'image'} svgToUse={"./panda.svg"} />
        </main>
    );
}
