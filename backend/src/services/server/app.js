import express from "express"
import cors from 'cors'
import {register} from "../../controllers/register.js";
import {login} from "../../controllers/login.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', async (req, res) => {
    await res.sendStatus(await login(req));
})

app.post('/api/register', async (req, res) => {
    await res.sendStatus(await register(req));
})



export default app;