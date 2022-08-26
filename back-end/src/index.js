const express = require('express');
const router = require('./routes');
const error = require('./Middleware/middlewareError');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', router);
app.use(error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;
