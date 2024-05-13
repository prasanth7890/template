const express = require('express')

const app = express();

app.get('/', (req, res)=> {
    console.log('hello world');
    res.send('hello world');
})

app.listen(9999, console.log('server started at port: 9999'));