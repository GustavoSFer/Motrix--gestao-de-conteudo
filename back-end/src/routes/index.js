const { Router } = require('express');
const blogController = require('../controller/BlogController');

const route = Router();

route.post('/blog', blogController.create);
route.post('/updateBlog', blogController.update);
route.get('/blog/:id', blogController.getOne);
route.patch('/updateBlog/:id', blogController.removeOneUpdate);
route.patch('/blog/:id', blogController.remove);

module.exports = route;
