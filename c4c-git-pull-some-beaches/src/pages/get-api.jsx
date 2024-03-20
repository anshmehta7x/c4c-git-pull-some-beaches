import React, { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Docs from "../components/docs";

const GetApi = () => {
    const [inputText, setInputText] = useState("");
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const createAPIKey = async () => {
        if (inputText === "")
            return alert("Please enter your name to get the API key.");
        try {
            const response = await axios.post(
                "http://localhost:8000/api_keys",
                {
                    owner: inputText,
                    is_active: true,
                }
            );
            console.log("API Key created:", response.data);
            setResponseData(response.data);
        } catch (error) {
            console.error("Error creating API Key:", error);
            setError(error);
        }
    };

    return (
        <div className="h-screen w-screen bg-black bg-background bg-cover overflow-x-hidden">
            <Navbar />
            <div className="flex-col justify-center align-middle text-center items-center h-full">
                <h1 className="text-4xl text-mainPurple urbanist-head">
                    Get the API, ForReal.
                </h1>
                <form>
                    <div className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="bg-black text-white md:w-1/2 w-3/4 p-3 rounded-md my-5 border-[1px]"
                            value={inputText}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="bg-main-purple text-white p-3 rounded-md md:w-1/6 w-1/3"
                            onClick={createAPIKey}
                        >
                            Get API
                        </button>
                    </div>
                </form>
                {responseData && (
                    <div className="text-white font-mono mt-4 urbanist-light">
                        <h2>Your API key is:</h2>
                        <pre>{responseData.key}</pre>
                        <br />
                        <h2>Keep it safe, it's non-recoverable :)</h2>
                    </div>
                )}
                {error && <p className="text-red-600">Error: {error.message}</p>}
                <br />
                <Docs />
                <br />
            </div>
        </div>
    );
};

export default GetApi;
