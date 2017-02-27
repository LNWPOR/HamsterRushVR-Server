import Player from '../models/player';

export const getAll = (req,res) => {
  Player.find((err, players ) => {
    if (err)
        res.send(err)
    res.json(players);
  });
}

export const getById = (req,res) => {
  Player.findOne({ _id: req.body.id }, (err, player) => {
    if (err) return console.error(err);
      res.json(player);
  });
}

export const add = (req,res) => {
  console.log(req.body.name);
  Player.findOne({ name:req.body.name }, (err, player) => {
    if(!player){
      var player = new Player(req.body);
      player.save((err) => {
        if (err) {
          return res.send(err);
        }
        //Sign in success.
        return res.send("1");
      });
    }else{
      //Already have Player with this name. Please use other name.
      return res.send("0");
    }
  });
}

export const edit = (req,res) => {
  Player.findOne({ _id: req.body.id }, (err, player) => {
    if (err) {
      return res.send(err);
    }

    player.description = req.body.description;

    // save the movie
    player.save(function(err) {
      if (err) {
        return res.send(err);
    }
    });
  });
}

export const remove = (req,res) => {
  Player.remove({_id: req.body.id}, (err, player) => {
    if (err) {
      return res.send(err);
    }
  });
}