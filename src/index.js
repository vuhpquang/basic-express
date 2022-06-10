const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userRoute = require('./routes/user.route');

const PORT = process.env.PORT || 5000;

const DB = process.env.DB || 'mongodb+srv://quangvupp321:Yunishinoya123@cluster0.9px4j.mongodb.net/?retryWrites=true&w=majority';

//Connect DB
mongoose.connect(DB, () => {
    console.log('Connected to DB');
})

app.use(bodyParser.json({
    limit: '50mb',
}));
app.use(cors());
app.use(morgan("common"));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/', (req, res) => {
    res.send(`Listening on ${ PORT }`);
});

app.get('/test', (req, res) => {
  res.status(200).json('Hello World!');
});

//ROUTES
app.use('/user', userRoute);


