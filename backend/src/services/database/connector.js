import mongoose from "mongoose";
const connection = await mongoose.connect('mongodb://root:rootpassword@localhost:27017/');

export default connection;


