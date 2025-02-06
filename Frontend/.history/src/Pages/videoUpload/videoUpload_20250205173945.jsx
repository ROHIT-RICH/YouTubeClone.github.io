import React, { useState } from "react";
import "./videoUpload.css";
import { Link } from "react-router-dom";
import axios from "axios";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function VideoUpload(){

    // Form Handling for input fields
    const[upLoad,setupLoad] = useState({
        "title":"",
        "description":"",
        "category":"",
        "thumbnail":"",
        "video":"",
    })
    // Loader
    const[loader , setLoader] = useState(false);

    function handleOnchange(e, name){
        setupLoad({
            ...upLoad,[name]:e.target.value
        })
    }

     // file hanlding
  const imageUpload = async(e , type)=>{
    setLoader(true)
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    // youtube-clone preset name cloudinary
    data.append('upload_preset','youtube-clone');
    try{
      // cloud name = dyq7tpoly
      const response = await axios.post(`https://api.cloudinary.com/v1_1/dyq7tpoly/${type}/upload`, data)
      const Url = response.data.url;
    
    
      
      setLoader(false)
      let val = type === "image"?"thumbnail":"video";
      setupLoad({
        ...upLoad,[val]:Url
    })
      
    }catch(err){
        setLoader(false)
      console.log(err);
    }
  }

    return(
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color:"red"}}/>
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" className="uploadFormInputs" onChange={(e)=>handleOnchange(e,"title")} placeholder="Title of video" />
                    <input type="text" className="uploadFormInputs" onChange={(e)=>handleOnchange(e,"description")} placeholder="Description" />
                    <input type="text" className="uploadFormInputs" onChange={(e)=>handleOnchange(e,"category")} placeholder="Category" />
                    <div className="file">Thumbnail &nbsp; <input type="file" onChange={(e)=> imageUpload(e, "image")} accept="image/*" /></div>
                    <div className="file">Video &nbsp; <input type="file" onChange={(e)=> imageUpload(e, "video")} accept="video/mp4, video/webm, video/*" /></div>

                    {
                    loader && <Box sx={{ display: 'flex' }}>
                                   <CircularProgress />
                                   </Box>
                }


                </div>

                

                <div className="uploadButton">
                    <div className="uploadAction">Submit</div>
                    <Link to={'/'} className="uploadAction">Home</Link>
                </div>


            </div>
        </div>
    )
}

export default VideoUpload;