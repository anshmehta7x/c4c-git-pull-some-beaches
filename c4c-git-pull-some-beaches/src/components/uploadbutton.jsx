export default function UploadButton({ type }) {
    return (
        <div className="flex flex-col p-20 rounded-2xl drop-shadow-xl align-middle justify-center text-center">
            <div>
                <button className="bg-new-blue w-[60vw] md:w-[20vw] text-white rounded-full px-5 py-3 font-bold">
                    Upload {type}
                </button>
            </div>
            <br />
            <div className="text-white">
                <p className="text-lg">or drop a file,</p>
                <p>paste image or URL</p>
            </div>
        </div>
    );
}
