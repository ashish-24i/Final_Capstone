import { Link } from "react-router-dom";
import "./videoUpload.css"

import { useState } from 'react';


function VideoUpload() {

    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })

    function handleOnChangeInput(event, name) {
        setInputField({
            ...inputField, [name]: event.target.value
        })
    }

    console.log(inputField)
    return (
        <div className="videoUpload">

            <div className="uploadBox">

                <div className="uploadvideotitle">
                    <i class="fa-brands fa-youtube text-red-600 text-4xl"></i>
                    <span className="relative bottom-2  ml-5">Upload Video</span>
                </div>

                <div className="uploadForm">
                    <input type="text" value={inputField.title} onChange={(e) => { handleOnChangeInput(e, "title") }} placeholder="title ofvideo" className="uploadFormInputs" />
                    <input type="text" value={inputField.description} onChange={(e) => { handleOnChangeInput(e, "description") }} placeholder="Description" className="uploadFormInputs" />
                    <input type="text" value={inputField.videoType} onChange={(e) => { handleOnChangeInput(e, "videoType") }} placeholder="Category" className="uploadFormInputs" />

                    <div>Thumbnail  <input type="file" accept="image/*" /></div>

                    <div>Video  <input type="file" accept="video/mp4, video/webm, video/*" /></div>
                </div>

                <div className="uploadBtns">

                    <div className="uploadBtn-form">Upload</div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>
                </div>


            </div>



        </div>
    )
}



export default VideoUpload; 