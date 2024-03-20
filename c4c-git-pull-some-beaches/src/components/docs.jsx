import React from "react";

export default function Docs() {
    return (
        <div
            className=" text-white urbanist-regular mt-5 w-full md:px-0 px-10 flex justify-center align-middle items-center"
            id="docs"
        >
            <div className="md:w-[60vw] w-full">
                <h1 className="text-4xl urbanist-head underline">Docs</h1>
                <br></br>
                <h2 className="text-2xl urbanist-head">Introduction</h2>
                <p className="text-justify">
                    This is the documentation for the ForReal. API. You can use
                    this API to classify any audio clip as real audio or
                    DeepFaked AI-generated audio.
                </p>
                <br></br>
                <h2 className="text-2xl urbanist-head">Authentication</h2>
                <p className="text-justify">
                    To use the ForReal. API, you need to get an API key. You can
                    get an API key by entering your name in the form above and
                    clicking "Get API". You can then use the API key to
                    authenticate your requests. Please include your API key in
                    the request header for authentication.
                </p>
                <br></br>
                <h2 className="text-2xl urbanist-head">Base URL</h2>
                <p className="text-justify text-wrap">
                    The base URL for the ForReal. API is
                    <code className="text-wrap">
                        &nbsp;https://cf67-136-233-9-98.ngrok-free.app.
                    </code>{" "}
                    You can append the endpoint to this base URL to make
                    requests.
                </p>
                <br></br>
                <h2 className="text-2xl urbanist-head">Endpoints</h2>
                <p className="text-justify">
                    The ForReal. API has the following endpoints:
                </p>
                <h3 className="text-lg urbanist-head text-left">
                    1. POST /classify/
                </h3>
                <p className="text-justify">
                    Use this endpoint to classify an audio clip as real audio or
                    DeepFaked AI-generated audio. You need to include the audio
                    clip in the request body as a form-data file. You also need
                    to include your API key in the request header for
                    authentication.
                </p>
                <br></br>
                <h2 className="text-2xl urbanist-head">Response</h2>
                <p className="text-justify">
                    The response for a successful request will be a JSON object
                    with the following fields:
                    <br></br>
                    <code>{"{"}</code>
                    <br></br>
                    <code>&nbsp;&nbsp;"status":</code> The status of the
                    request. This will be "success" for a successful request.
                    <br></br>
                    <code>&nbsp;&nbsp;"result":</code> The result of the
                    classification. This will be 1 for real audio and 0 for
                    DeepFaked AI-generated audio.
                    <br></br>
                    <code>{"}"}</code>
                </p>
                <br></br>
                <h2 className="text-2xl urbanist-head">Error Handling</h2>
                <p className="text-justify">
                    The ForReal. API uses conventional HTTP response codes to
                    indicate the success or failure of a request. In general,
                    codes in the 2xx range indicate success, codes in the 4xx
                    range indicate an error that failed given the information
                    provided (e.g., a required parameter was omitted, a charge
                    failed, etc.), and codes in the 5xx range indicate an error
                    with ForReal.'s servers.
                </p>
                <br></br>
                <h2 className="text-2xl urbanist-head">Example</h2>
                <p className="text-justify">
                    Here is an example of how to use the ForReal. API to
                    classify an audio clip as real audio or DeepFaked
                    AI-generated audio using Python:
                </p>
                <pre className="text-left bg-[#262626] p-2 rounded-lg mt-2 text-wrap">
                    {`POST /classify HTTP/1.1
URL: https://cf67-136-233-9-98.ngrok-free.app
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "data": "<raw audio data>"
}`}
                </pre>
                <br></br>
                <h2 className="text-2xl urbanist-head">Rate Limits</h2>
                <p className="text-justify">
                    The ForReal. API has a rate limit of 100 requests per day.
                    If you exceed this limit, you will receive a 429 Too Many
                    Requests response code.
                </p>
                <br></br>
                <h2 className="text-2xl urbanist-head">Support</h2>
                <p className="text-justify">
                    If you have any questions or need help with regards to
                    ForReal. API, please contact us at
                    <code>&nbsp;manan04shah@gmail.com</code> or{" "}
                    <code>anshkapilmehta@gmail.com</code>
                </p>
            </div>
        </div>
    );
}
