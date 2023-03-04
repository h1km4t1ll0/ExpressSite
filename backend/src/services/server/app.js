import express from  "express"
import {checkLogin} from "../database/index.js";
import {login} from "../../controllers/login.js";

const app = express()
const port = 3000
export default app;

app.post('/api/login', async (req, res) => {
    res.status(await login(req)).send();
})

