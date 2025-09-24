import { Link } from "react-router-dom";
import "./videoUpload.css"

import { useState } from 'react';

import axios from "axios";


function VideoUpload() {

    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })

    const [loader, setLoader] = useState(false)
    function handleOnChangeInput(event, name) {
        setInputField({
            ...inputField, [name]: event.target.value
        })
    }


    async function uploadImage(e, type) {

        setLoader(true)

        console.log("uploading")
        const files = e.target.files;

        const data = new FormData();

        data.append('file', files[0])

        data.append('upload_preset', 'youtube-clone')

        try {

            const response = await axios.post(`https://api.cloudinary.com/v1_1/daft2gaqq/${type}/upload`, data)
            const url = response.data.url;

            setLoader(false)

            let val = type === "image" ? "thumbnail" : "videoLink"

            setInputField({
                ...inputField, [val]: url
            })
        }



        catch (err) {
            setLoader(false)
            console.log(err)
        }


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

                    <div>Thumbnail  <input type="file" accept="image/*" onChange={(e) => uploadImage(e, "image")} /></div>

                    <div>Video  <input type="file" accept="video/mp4, video/webm, video/*" onChange={(e) => uploadImage(e, "video")} /></div>


                    {
                        loader && <div className="flex items-center justify-center">
                            <i className="fas fa-spinner fa-spin text-4xl text-blue-600"></i>
                        </div>


                    }

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