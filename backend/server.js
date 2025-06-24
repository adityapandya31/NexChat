import path from "path";
 import express from"express";
 import dotenv from"dotenv";
 import authRoutes from"./routes/auth.routes.js";
 import messageRoutes from"./routes/message.routes.js";
 import usersRoutes from"./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser"; // use get the cookie from the request body 
 import { app, server } from "./socket/socket.js";
import cors from "cors";

app.use(cors());


 dotenv.config();
 const port = process.env.PORT||5000

 const __dirname = path.resolve();

 app.use(express.json()); // helps convert the data coming by request in the post/ get method 
 app.use(cookieParser());

 app.use("/api/users",usersRoutes)
 app.use("/api/auth",authRoutes);
 app.use("/api/messages",messageRoutes);

 app.use(express.static(path.join(__dirname,"/frontend/dist")));
 app.get("*",(req,res)=>{
     res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
 });

server.listen(port,()=>{
   connectToMongoDB();
   
    console.log(`server running on port ${port}`);
 })
