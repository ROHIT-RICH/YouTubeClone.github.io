var express = require("express");
var app = express();
var port = 4000;
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({
    origin:'http://localhost:5173',//your frontend URL
    credentials:true //to use cookies
}));

// inbuilt middleware
app.use(express.json());

// use cookieParser also builtin middleware
app.use(cookieParser());

// db
require('./Connenction/conn');



const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');
const CommentRoutes = require('./Routes/comment');

app.use('/auth', AuthRoutes);
app.use('/api', VideoRoutes);
app.use('/commentApi', CommentRoutes);

app.listen(port, ()=>{console.log("Server Running on Port" , port)});