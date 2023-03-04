import {User} from './models/index.js'
import {default as connection} from './connector.js'
import {Callback} from "../../callback.js";

/*
let usr = new User()

usr.name = 'Biba';
usr._id = '1njlnjlk15';
*/

//await console.log(connection);


// await usr.save()
/*async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let i;
for (i = 0; i < 100; i++) {
    console.log(await User.find({_id: usr._id}).exec())
    await sleep(1000);
}*/

//await console.log(User.find({id:usr.id}).exec())

export async function checkLogin(login, password) {
    let logins = await User.find({login: login}).select('login').exec();
    console.log(logins);
    await connection.disconnect();
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
    if (User.find({name: name}).select('name').exec().length !== 0) {
        await connection.disconnect();
        return new Callback(false, null);
    }
    if (User.find({login: login}).select('login').exec().length !== 0) {
        await connection.disconnect();
        return new Callback(false, null);
    }
   /* if (User.find({password: password}).select('password').exec().length !== 0) {
        return new Callback(false, null);
    }*/
    let user = new User()
    user.name = name;
    user.login = login;
    user.password = password;
    user.save();
    return new Callback(true, null);
}

