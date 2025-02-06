import React, { useState } from "react";
import "./signUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {

  const[upLoadedImg,setUploadedImg] = useState("https://png.pngtree.com/png-vector/20220624/ourmid/pngtree-unknown-user-question-mark-about-png-image_5178068.png");
  const [signUpField, setSignUpField] = useState({
    "channelName": "",
    "userName": "",
    "password": "",
    "about": "",
    "profilePic": upLoadedImg,
  });

  function handleOnchangeInput(e, name){
    setSignUpField({
        ...signUpField,[name]:e.target.value
    })
  } //console.log(signUpField);

  // file hanlding
  const imageUpload = async(e)=>{
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    // youtube-clone preset name cloudinary
    data.append('upload_preset','youtube-clone');
    try{
      // cloud name = dyq7tpoly
      const response = await axios.post("https://api.cloudinary.com/v1_1/dyq7tpoly/image/upload", data)
      const imgUrl = response.data.url;
      setUploadedImg(imgUrl);
      setSignUpField({
        ...signUpField,profilePic e.target.value
    })
    }catch(err){
      console.log(err);
    }
    // console.log(files)
  }

  return (
    <div className="signup">
      <div className="signupCard">
        <div className="signupTitlecard">
          <YouTubeIcon sx={{ fontSize: "54px" }} className="signupYoutubeImg" />
          Signup
        </div>

        <div className="signupDetail">
          <div className="signupUserName">
            <input
              type="text"
              value={signUpField.channelName}
              onChange={(e)=>handleOnchangeInput(e,"channelName")}
              className="userNameInput"
              placeholder="Channel Name"
            />
            <input
              type="text"
              value={signUpField.userName}
              onChange={(e)=>handleOnchangeInput(e,"userName")}
              className="userNameInput"
              placeholder="User Name"
            />
            <input
              type="password"
              value={signUpField.password}
              onChange={(e)=>handleOnchangeInput(e,"password")}
              className="userNameInput"
              placeholder="Password"
            />
            <input
              type="text"
              value={signUpField.about}
              onChange={(e)=>handleOnchangeInput(e,"about")}
              className="userNameInput"
              placeholder="About Your Channel"
            />

            <div className="imageUpload">
              <input type="file" onChange={(e)=>imageUpload(e)} />
              <div className="imageUploaded">
                <img
                  src={upLoadedImg}
                  alt=""
                  className="signupImg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="signupButtons">
          <div className="signupBtn">Signup</div>
          <Link to={"/"} className="signupBtn">
            HomePage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
