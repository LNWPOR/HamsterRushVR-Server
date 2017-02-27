import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
let playerSchema = mongoose.Schema({
    name : String,
    scores : Number,
    seeds : Number
});

let Player = mongoose.model('players', playerSchema);
    
export default Player;