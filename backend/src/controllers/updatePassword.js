import {updateAny} from "../services/database/index.js";

export async function updPass(request){
    let user = request.body;

    if (user === false){
        return 400;
    }
    if (await updateAny(user._id, user.password, 'password' ).status === false) {
        return 400;
    }
    return 200;
}
