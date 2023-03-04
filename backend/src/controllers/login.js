import {parseObject} from "../utils/parseObject.js";
import {checkLogin} from "../services/database/index.js";


export async function login(request){
    let user = parseObject(request);
    if (checkLogin(user.login, user.password).status === false) {
        return 400;
    }
    return 200;
}