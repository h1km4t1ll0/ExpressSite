import app from './src/services/server/app.js'
import {port} from "./src/configs/appConf.js";
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

