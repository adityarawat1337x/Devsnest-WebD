Express handles request and response

cd folder

[1.] npm init - initalise a node repo

npm install ---save express

--save -- while production phase
--save-dev -- while developemnt phase

- for faster app

npm install -save-dev nodemon

- nodemon to serve pages

[2.]
index.js
const express = require('express');

const app = express();

app.listen(5000);

app.get('/',(req,res) => {
res.send('Hello');
})

app.method
method - get,post,pu,delete

app.get('/',(req,res) => {
res.json({a:1});
})

[4.]
res.sendStatus(200);

- res.status(200).send("");

- res.status(400).json({});

localhost/products?limit=50&q=data

app.get('/',(req,res) =>{
req.query.q
req.query.limit
})

[5.]
regex works

localhost/abdc
localhost/acd

? - 0 or more times

- - 1 or more times

* - anything of any length

app.get('/ab?cd',(req,res) => {
res.send('ok');
})

[6.]
localhost/user/abhay/

app.get('/user/:userId/',(req,res) => {
req.params;
})
