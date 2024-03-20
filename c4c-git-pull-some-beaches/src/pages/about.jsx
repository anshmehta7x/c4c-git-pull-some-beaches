import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Landing() {
    return (
        <div className="h-screen w-screen bg-background bg-cover overflow-x-hidden urbanist-regular">
            <Navbar className="absolute top-0 left-0" />
            <section className="px-10 md:px-20 snap-y snap-mandatory mt-5">
                <div className="flex flex-col justify-center h-full w-full my-2 snap-start">
                    <h1 className=" text-4xl text-main-purple urbanist-head text-center">
                        The Problem
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className=" text-justify text-xl text-white md:pr-10 my-5">
                            Deepfaked audio presents grave concerns, enabling
                            misinformation dissemination, social engineering,
                            and identity theft. It can also manipulate public
                            opinion by fabricating speeches or statements from
                            public figures.
                        </p>
                        <img
                            src="/aideepfake.png"
                            className="w-[45vw] md:w-[20vw]"
                        ></img>
                    </div>
                </div>
                <br></br>
                <div className="flex flex-col justify-center h-full w-full my-2 snap-start">
                    <h1 className=" text-4xl text-main-purple urbanist-head text-center">
                        Our Solution
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <img
                            src="/aibrain.png"
                            className=" order-2 md:order-1 w-[100vw] md:w-[45vw] h-auto "
                        ></img>
                        <p className="order-1 md:order-2 text-justify text-xl text-white my-5">
                            Leveraging the power and versatility of a Neural
                            Network, we propose an AI-driven detection system
                            capable of discerning between authentic and
                            deepfaked audio with an accuracy of 96%. Our
                            solution utilizes advanced machine learning
                            algorithms to analyze subtle patterns and
                            discrepancies in audio signals{" "}
                        </p>
                    </div>
                </div>
                <br></br>
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl text-main-purple urbanist-head text-center">
                        How are we doing it?
                    </h1>
                    <p className="text-xl text-white text-justify mt-5 mb-10">
                        We begin by preprocessing the audio data, converting it
                        into a format suitable for analysis. This includes
                        extracting features such as spectrograms and MFCCs,
                        which provide valuable insights into the underlying
                        characteristics of the audio signals.
                        <img src="/timegraph.png" className="my-5"></img>
                        Spectrograms are visual representations of the frequency
                        content of audio signals over time. By decomposing the
                        audio signal into its frequency components and plotting
                        them as a function of time, spectrograms reveal
                        important patterns and structures, such as speech
                        patterns, background noise, and anomalies.
                        <img src="/spectrogram.png" className="my-5"></img>
                        Additionally, we compute Mel-frequency cepstral
                        coefficients (MFCCs), which are widely used features in
                        speech processing tasks. MFCCs capture the spectral
                        characteristics of audio signals by representing the
                        short-term power spectrum of sound in a compact form.
                        <img src="/mfcc.png" className="my-5"></img>
                        Leveraging these extracted features, our model learns to
                        discern between genuine and deepfaked audio samples.
                    </p>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl text-main-purple urbanist-head text-center">
                        The Team
                    </h1>
                    {/* <div className="flex flex-col md:flex-row justify-center items-center">
                        <img
                            src="/team.jpg"
                            className="w-[100vw] md:w-[20vw] h-auto"
                        ></img>
                        <div>
                            <div className="mx-5 text-lg text-white urbanist-regular">
                                <p>Ansh Mehta 22BCE2112</p>
                                <p>anshkapilmehta@gmail.com</p>
                                <a href="https://github.com/anshmehta7x">
                                    github.com/anshmehta7x
                                </a>
                            </div>
                            <br></br>
                            <div className="mx-5 text-lg text-white urbanist-regular">
                                <p>Manan Shah 22BCE0618</p>
                                <p>manan04shah@gmail.com</p>
                                <a href="https://github.com/manan04shah">
                                    github.com/manan04shah
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div className="my-5 text-lg text-white urbanist-regular">
                        <p>
                            For more detailed and step-by-step analysis on how
                            we trained our model, check out our <a>Kaggle notebook</a>
                            &nbsp;and <a href="https://github.com/manan04shah/git-pull-technica-2024">GitHub repository</a>.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
