import express from 'express';
import users from './api/users';
import lists from './api/lists';
import players from './api/players';

let routes = express.Router();

//api
routes.use('/api/users', users);
routes.use('/api/lists', lists);
routes.use('/api/players', players);

export default routes;