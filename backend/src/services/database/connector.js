import mongoose from "mongoose";

async function connect (){
    await mongoose.connect('mongodb://root:rootpassword@127.0.0.1:27017');
}

async function disconnect(){
    await mongoose.disconnect()
}
export {connect, disconnect};


