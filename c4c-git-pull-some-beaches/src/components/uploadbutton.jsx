/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function UploadButton({ type ,accept, seterrorText, seterrorVisibility}) {

    const fileInputRef = useRef();
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('fake_percent', '');
        localStorage.setItem('type', '');
    },[])


    const showError = (message) => {
        seterrorText(message);
        seterrorVisibility('visible');

        // Set a timeout to hide the error message after 5 seconds
        setTimeout(() => {
            seterrorText('');
            seterrorVisibility('hidden');
        }, 5000);
    };


    const [isDrag,setisDrag] = useState('');

    const handleFileChange = async (event) => {
        setisDrag('')
        if (event.target.files[0].size > MAX_FILE_SIZE) {
            showError('File size exceeds 5MB');
          event.target.value = '';
        } else {
          const file = event.target.files[0];
          const formData = new FormData();
          formData.append('file', file);
          uploadFile(formData);
        }
      };
    
      const uploadFile = (formData) => {
        setisDrag('')

        axios
          .post('http://127.0.0.1:8000/classify', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            localStorage.setItem('fake_percent', response.data.fake_percent);
            localStorage.setItem('type', type)
            navigate('/output')
          })
          .catch((error) => {
            
            showError(error.message);
          });
      };
    
      const handleUploadClick = () => {
        fileInputRef.current.click();
      };

      const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.items) {
            if (event.dataTransfer.items[0].kind === 'file') {
                const file = event.dataTransfer.items[0].getAsFile();
                const formData = new FormData();
                formData.append('file', file);
                uploadFile(formData);
            }
        } };

      

    return (
        <div id="drop-area" 
        onDrop={handleDrop}

        onDragOver={(event) => {event.preventDefault()
            setisDrag('border-4 border-dashed border-main-purple bg-main-grey bg-opacity-50')
        }}
        onDragLeave={(event) => {event.preventDefault()
            setisDrag('')
        }}
        className={`flex flex-col ${isDrag} p-20 rounded-2xl drop-shadow-xl align-middle justify-center text-center`}>
            <div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept={accept}
                    onChange={handleFileChange}
                />
                <button onClick={handleUploadClick} className="bg-new-blue w-[60vw] md:w-[20vw] text-white rounded-full px-5 py-3 font-bold">
                    Upload {type}
                </button>
            </div>
            <br />
            <div className="text-white flex flex-col">
                <p className="text-lg">or drop a file,</p>
                <p>paste {type} or URL</p>
            </div>

        </div>
    );
}
