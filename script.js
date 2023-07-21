const express = require('express')
const urlRoute = require('./routes/url');
const app = express();
const {connectTOmongodb} = require('./connection')
connectTOmongodb('mongodb://localhost:27017/short-url').then(() => console.log('Mongodb connected'))
const PORT = 4000
app.use("/url",urlRoute);
app.listen(PORT , () => console.log('Server running'))