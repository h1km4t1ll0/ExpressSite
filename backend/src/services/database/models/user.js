import mongoose, {model} from "mongoose";

let UserSchema;

UserSchema = new mongoose.Schema({

    name: String,
    login: String,
    password: String,
    mail: String,
    phone: String,
    subUsers: [],
    role: {
        type: String,
        enum: ['client', 'marketer'],
        default: 'client'
    },
    avatar: String
});

const User = await mongoose.model("user", UserSchema);

export {User, UserSchema};


