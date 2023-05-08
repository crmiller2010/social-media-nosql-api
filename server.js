const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

mongoose.connect("mongodb://localhost:27017/mongoosePotatoes", {

});


mongoose.set('debug', true);

app.listen(PORT, () => console.log(` Connected on localhost:${PORT}`));
