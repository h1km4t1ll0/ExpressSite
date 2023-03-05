import {checkLogin} from '../services/database/index.js'
import {User} from '../services/database/models/index.js'
import {Report} from "../services/database/models/index.js";
//import {changeField} from "../services/database/index.js";
import {connect} from '../services/database/connector.js'

await connect()
let user = new User();
user.name = "Bibka";
user.login = 'biba';
user.password = '1234';
user.phone = 888888888;
user.subUsers.push('Huesos');
await user.save();

let report = new Report();
report.expenseFoPeriod = 12332;
report.income = 122;
report.conversionCost = 1000000;
report.clicks = 22;
report.marketType = 'Suka';
report.placement = 'pizda';
report.users.push(user);
await report.save();

console.log(user.subUsers);
/*async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let i;
for (i = 0; i < 100; i++) {
    console.log(await User.find({_id: user._id}).exec())
    await sleep(1000);
}*/
// let res = await checkLogin(user.login, user.password);



