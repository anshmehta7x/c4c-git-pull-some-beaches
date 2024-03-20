import React, { useRef } from 'react';


export default function UploadButton({ type }) {

    const fileInputRef = useRef(null);

    const handleDrop = (event) => {
        console.log(event)
    }

  const handleImageSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedImage = files[0];
      console.log(selectedImage)
    }
  };

    return (
        <div onDrop={handleDrop} className="flex flex-col p-20 rounded-2xl drop-shadow-xl align-middle justify-center text-center">
            <div>
                <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
                />

                <button onClick={handleImageSelect} className="bg-new-blue w-[60vw] md:w-[20vw] text-white rounded-full px-5 py-3 font-bold">
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
