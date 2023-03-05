import {registration} from "../services/database/index.js";


export async function register(request){
    let user = request.body;

    if (user === false){
        return 400;
    }
    if (await registration(user.name, user.login, user.password).status === false) {
        return 400;
    }
    return 200;
}