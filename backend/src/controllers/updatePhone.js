import {updateAny} from "../services/database/index.js";

export async function updPhone(request){
    let user = request.body;

    if (user === false){
        return 400;
    }
    if (await updateAny(user._id, user.phone, 'phone' ).status === false) {
        return 400;
    }
    return 200;
}
