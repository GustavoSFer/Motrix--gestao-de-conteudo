const { Router } = require('express');
const controller = require('../controller');

const route = Router();

route.get('/', controller.getAll);
route.post('/blog', controller.create);

module.exports = route;
