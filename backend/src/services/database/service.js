import {User} from './models/index.js'
import {connect, disconnect} from './connector.js'
import {Callback} from "../../callback.js";
import {assign} from "../../utils/setObjProp.js"

export async function checkLogin(login, password) {
    await connect()
    let logins = await User.find({login: login}).exec();
    await disconnect();
    if (logins.length === 0) {
        return new Callback(false, null);
    }
    if (logins.length === 1) {
        if (logins[0].password === password) {
            return new Callback(true, null);
        }
        return new Callback(false, null);
    }
}

export async function registration(name, login, password) {
    await connect()
    let query = await User.find({name: name}).select('name').exec();
    if (query.length !== 0) {
        await disconnect();
        return new Callback(false, null);
    }
    query = await User.find({login: login}).select('login').exec();
    if (query.length !== 0) {
        await disconnect();
        return new Callback(false, null);
    }

    let user = new User()
    user.name = name;
    user.login = login;
    user.password = password;
    await user.save();
    await disconnect();
    return new Callback(true, null);
}

export async function updateAny(id, value, field){
    let obj = {}
    await assign(obj, field, value)
    await User.updateOne({_id:id}, obj)
}
