import UploadButton from "./uploadbutton";

export default function HeroImage(){
    return <section className="border-red-600 border-2 h-[88vh] px-48">
        <div className="border-red-600 border-2 flex flex-col h-screen justify-center">
            <div className="flex flex-row justify-evenly">
                <img src='/panda.svg' className="size-64"></img>
                <UploadButton type="Image"/>
            </div>
            <div>

            </div>
        </div>
    </section>
}