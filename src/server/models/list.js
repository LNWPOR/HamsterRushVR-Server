import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
let listSchema = mongoose.Schema({
    description : String,
    ownerID : String
    // date : {type: Date, default: Date.now()}
});

let List = mongoose.model('lists', listSchema);
    
export default List;