import express from "express"
import cors from 'cors'
import {register} from "../../controllers/register.js";
import {login} from "../../controllers/login.js";
import {updPass} from "../../controllers/updatePassword.js";
import {updAvatar} from "../../controllers/updateAvatar.js";
import {updPhone} from "../../controllers/updatePhone.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', async (req, res) => {
    await res.sendStatus(await login(req));
})

app.post('/api/register', async (req, res) => {
    await res.sendStatus(await register(req));
})

app.post('api/changePassword', async (req, res) => {
    await res.sendStatus(await updPass(req));
})

app.post('api/changeAvatar', async (req, res) => {
    await res.sendStatus(await updAvatar(req));
})

app.post('api/changePhone', async (req, res) => {
    await res.sendStatus(await updPhone(req));
})
export default app;
