import express from 'express';
import mongoose from 'mongoose';
import router from "./Router.js";


const PORT = 4000;
const db_URL = `mongodb+srv://User:User@cluster0.6ezpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// I understand that I cannot push a link for BD into the git, but it will be more convenient for a test task.
const app = express();



app.use(express.json());
app.use(express.static('static'));
app.use(router);



async function startApp(){
    try {
        await mongoose.connect(db_URL,  {useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT,()=>console.log("server was start on PORT" + PORT));
    }catch (e){
        console.log(e);
    }
};

startApp();
