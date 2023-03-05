import app from './src/services/server/app.js'
import {port} from './src/configs/appConf.js'

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
