const express = require('express');
const cors = require('cors');


// middleware ===============================
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// ALL ROUTES


module.exports = app;