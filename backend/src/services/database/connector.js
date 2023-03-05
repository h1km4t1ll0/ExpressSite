import mongoose from "mongoose";
import {DB_URL} from "../../configs/dbConf.js";
async function connect (){
    await mongoose.connect(DB_URL);
}

async function disconnect(){
    await mongoose.disconnect()
}
export {connect, disconnect};


