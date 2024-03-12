const Redis = require('ioredis');

const redis = new Redis('redis:6379');

const express = require("express")
const app = express()

app.get("/", async function(req, res) {
    point = await redis.incr('hits');
    res.send("Hello World AL26!" + point + ' times!\n');
});


app.listen(3000)




