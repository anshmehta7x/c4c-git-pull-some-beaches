export default function UploadButton({type}) {
    return (
        <div className="flex flex-col bg-[#181818] p-20 rounded-2xl drop-shadow-xl">
        <div>
            <button className="bg-new-blue text-white rounded-full px-5 py-3 font-bold">Upload {type}</button>
        </div>
        <div className="text-white">
            <p className="text-lg">or drop a file,</p>
            <p>paste image or URL</p>
        </div>
    </div>

        
    );
}