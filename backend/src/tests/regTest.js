import {checkLogin} from '../services/database/index.js'
import {User} from '../services/database/models/index.js'

let user = new User();

user.name = "Bibka";
user.login = 'biba';
user.password = '1234';
user.save();

/*async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let i;
for (i = 0; i < 100; i++) {
    console.log(await User.find({_id: user._id}).exec())
    await sleep(1000);
}*/
let res = await checkLogin(user.login, user.password);

