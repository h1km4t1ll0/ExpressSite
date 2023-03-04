const express = require('express')

const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.set('OK')
    res.sendStatus(200);
})

app.post('/', (req, res) => {
    res.status(400).send('Bad Request')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
