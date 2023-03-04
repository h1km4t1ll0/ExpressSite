import {checkLogin} from "../services/database/index.js";


export async function login(request){
    let user = request.body;

    if (user === false){
        return 400;
    }
    let result = await checkLogin(user.login, user.password);
    if (result.status === false) {
        return 400;
    }
    return 200;
}