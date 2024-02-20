import express from "express";
import {mongoDBurl} from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors"




const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response)=>{

    return response.status(234).send("kiddan jatto");
})

app.use('/books', bookRoutes);


mongoose.connect(mongoDBurl)
.then(()=>{
    console.log("App connected to the database");
    app.listen(3000);
})
.catch((error)=>{
    console.log(error);
    
})

