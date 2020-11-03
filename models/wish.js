const mongoose = require('mongoose')
// Given name to schema & given type
const WishSchema = mongoose.Schema({
    wish:String,
    name:String
});

mongoose.model("wishes",WishSchema)