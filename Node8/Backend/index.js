// importing express
const express = require('express');

// initializing the express because it is an parent library
// const app = express();
const cors = require('cors');
// app.use(cors());
var corsOptions = {
    credentials: true,
    origin: ["https://localhost:1000/","https://localhost:3000/"]
  };
const app = express()
    .use(cors(corsOptions)) 


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/Home', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(1000, (req,res) => {
    console.log('Server Started');
})