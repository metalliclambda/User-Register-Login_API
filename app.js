const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const userRout = require('./routes/user');

const app = express();

app.use(express.json());

//routes
app.use('/' , userRout);

mongoose.connect('mongodb://localhost:27017/banaoTask1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to DB');
        app.listen(3000, (req, res) => {
            console.log('Server started');
        });
    })
    .catch(err => {
        console.log(err);
    });
