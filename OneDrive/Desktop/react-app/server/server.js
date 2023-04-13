//install express
import express from "express";
import Connection from "./database/db.js";
const app = express();
const port = 8000;

Connection();

app.listen(port,()=>{
    try{
        console.log("server is running good");
    }catch(err){
        console.log(err);
    }
})
