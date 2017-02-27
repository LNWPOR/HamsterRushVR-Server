import Player from '../models/player';

export const getAll = (req,res) => {
  Player.find((err, players ) => {
    if (err)
        res.send(err)
    res.json(players);
  });
}

export const getById = (req,res) => {
  Player.findOne({ _id: req.params.id }, (err, player) => {
    if (err) return console.error(err);
      res.json(player);
  });
}

export const add = (req,res) => {
  Player.findOne({ name:req.body.name }, (err, player) => {
    if(!player){
      var player = new Player({name:req.body.name, scores:0, seeds:0});
      player.save((err) => {
        if (err) {
          return res.send(err);
        }
        var dataSent = {
          status:1,
          player:player
        }
        res.json(dataSent);
      });
    }else if(player){
      var dataSent = {
        status:1,
        player:player
      }
      res.json(dataSent);
    }
  });
}

export const addScoreSeed = (req,res) => {
  Player.findOne({ _id:req.params.id }, (err, player) => {
    if(player){
      console.log(player);
      if(req.body.scores > player.scores){
        player.scores = req.body.scores;
        player.save((err) => {
          if (err) {
            return res.send(err);
          }
        });
      }
      if(req.body.seeds > player.seeds){
        player.seeds = req.body.seeds;
        player.save((err) => {
          if (err) {
            return res.send(err);
          }
        });
      }
      var dataSent = {
        status:1
      }
      res.json(dataSent);
    }else {
      return res.send(err);
    }
  });
}

export const edit = (req,res) => {
  Player.findOne({ _id: req.params.id }, (err, player) => {
    if (err) {
      return res.send(err);
    }

    player.description = req.body.description;

    // save the movie
    player.save( (err) => {
      if (err) {
        return res.send(err);
      }
    });
  });
}

export const remove = (req,res) => {
  Player.remove({_id: req.params.id}, (err, player) => {
    if (err) {
      return res.send(err);
    }
  });
}