const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// manager les requêtes via cette url
app.use(cors({origin: 'http://localhost:8080'}));

// headers to manage les différentes requêtes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Request-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Transition entre le format JS et JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importation des routes
const articleRoutes = require("./routes/article");

// routes
app.use('/api/article', articleRoutes);


module.exports = app;