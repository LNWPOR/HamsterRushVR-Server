import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
let playerSchema = mongoose.Schema({
    name : String,
});

let Player = mongoose.model('players', playerSchema);
    
export default Player;