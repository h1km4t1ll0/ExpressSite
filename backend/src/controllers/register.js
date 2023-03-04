import {parseObject} from "../utils/parseObject.js";
import {registration} from "../services/database/index.js";


export async function login(request){
    let user = parseObject(request);
    if (registration(user.name,user.login, user.password).status === false) {
        return 400;
    }
    return 200;
}