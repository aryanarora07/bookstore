import experss from "express";
import {mongoDBurl} from "./config.js";
import mongoose from "mongoose";
import { error } from "console";

const app = experss();

app.get('/', (request, response)=>{

    return response.status(234).send("kiddan jatto");
})

mongoose.connect(mongoDBurl)
.then(()=>{
    console.log("App connected to the database");
    app.listen(3000);
})
.catch((error)=>{
    console.log(error);
    ///
})

