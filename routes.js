const express = require('express');
const app = express();

// import mongoose
const mongoose = require('mongoose');

// import mongodb url & credentials from config/keys.js
const { mongourl } = require('./config/keys.js')

// connect to database
mongoose.connect(mongourl,{ useUnifiedTopology: true, useNewUrlParser: true })

// import model Schema
const Wish = mongoose.model("wishes")

module.exports = (app) => {
    //get routes
    app.get('/', (req, res) => {
        Wish.find({}).then(data=>{
            console.log(data)
            res.render('home', { wish: data })
            
        })
        
    })

    app.get('/about', (req, res) => {
        res.render('about')
    })
    app.post('/sent', (req, res) => {
        const Item = new Wish({
            wish: req.body.item,
            name: req.body.name
        })
        Item.save()
            .then(data => {
                console.log("Saved",data)
            }).catch(err=>{
                throw err;
            })
    })
}
app.delete('/remove/:id', (req, res) => {
    Wish.findOneAndRemove({wish:req.params.id}).then(data=>{
        console.log("Deleted")
        res.send(data)
    })
    
})
