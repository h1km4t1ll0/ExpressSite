import {User} from './models/index.js'
import {default as connection} from './connector.js'
import * as timers from "timers";

let usr = new User()

usr.name = 'Biba';
usr._id = '1njlnjlk15';

//await console.log(connection);


 await usr.save()
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let i;
 for (i = 0; i< 100; i++){
     console.log(await  User.find({_id: usr._id}).exec())
    await sleep(1000);
}
//await console.log(User.find({id:usr.id}).exec())