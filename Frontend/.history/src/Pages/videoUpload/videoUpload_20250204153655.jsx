import React from "react";
import "./videoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

function VideoUpload(){
    return(
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color:"red"}}/>
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" className="uploadFormInputs" placeholder="Title of video" />
                    <input type="text" className="uploadFormInputs" placeholder="Description" />
                    <input type="text" className="uploadFormInputs" placeholder="Category" />
                    <div>Thumbnail &nbsp;<input type="file" accept="image/*" /></div>
                </div>


            </div>
        </div>
    )
}

export default VideoUpload;