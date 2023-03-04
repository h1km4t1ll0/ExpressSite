import mongoose from "mongoose";
const connection = await mongoose.connect('mongodb://root:rootpassword@172.20.10.5:27017/');

export default connection;


