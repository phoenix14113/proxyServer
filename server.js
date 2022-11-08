const url = require('url')
const express = require('express')
const app = express()
import('node-fetch')
const cors = require('cors')

app.use(cors())

app.get("/", async (req, res) => {
    const params = new URLSearchParams({
        ...url.parse(req.url,true).query
    })
    console.log(url.parse(req.url,true).query)
    console.log(req.url)
    const response = await fetch('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1' + req.url)
    res.json(await response.json())
})


app.listen(3000, () => {
    console.log('listening on 3000')
})