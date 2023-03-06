import {updateAny} from "../services/database/index.js";

export async function updAvatar(request){
    let user = request.body;

    if (user === false){
        return 400;
    }
    if (await updateAny(user._id, user.avatar, 'avatar' ).status === false) {
        return 400;
    }
    return 200;
}
