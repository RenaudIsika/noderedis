const Redis = require('ioredis');

const redis = new Redis('redis:6379');

const express = require("express")
const app = express()

app.get("/", async function(req, res) {
    point = await redis.incr('hits');
    res.send("Hello World! I have been seen " + point + ' times.\n');
});


app.listen(3000)




