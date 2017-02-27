import express from 'express';
import * as playerController from '../../controllers/player-controller';
let players = express.Router();

players.route('/')
  .get(playerController.getAll)
  .post(playerController.add);
players.route('/:id')
  .get(playerController.getById)
  .put(playerController.edit)
  .delete(playerController.remove);

export default players;