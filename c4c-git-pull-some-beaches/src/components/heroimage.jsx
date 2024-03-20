import UploadButton from "./uploadbutton";

export default function HeroImage({type, svgToUse}) {
    return (
        <section className="mt-[6vh] md:mt-0 md:h-[88vh] flex justify-center align-middle items-center">
            <div className="h-auto md:h-[75%] w-[75%]">
                <div className="h-[75%] flex flex-col md:flex-row">
                    <div className="w-full mb-5 md:mb-0 md:w-[60%] flex align-middle justify-center">
                        <img src={svgToUse} className="h-[100%] m-0"></img>
                    </div>
                    <div className="w-full h-[30vh] md:w-[40%] md:h-auto flex justify-center align-middle items-center md:ml-5">
                        <div className="bg-main-grey h-[100%] w-[100%] rounded-xl flex justify-center align-middle items-center">
                            <UploadButton type={type} />
                        </div>
                    </div>
                </div>
                <div className="h-[25%] p-5 pt-5 md:pt-10 text-white justify-center flex-col align-middle items-center text-center">
                    <h1 className="text-3xl font-bold">The AI that <span className="text-main-purple">exposes</span> AI.</h1>
                    <h2 className="text-xl font-semibold visible pt-2">Check the authenticity of any {type}, ForReal.</h2>
                </div>
            </div>
        </section>
    );
}
