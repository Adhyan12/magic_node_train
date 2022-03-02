//var authController= require('../controllers/authControl')
const client= require('../db')
var db = client.db()
var details = db.collection('user_details')
const mongodb = require('mongodb')


module.exports = function (app){
    app.get('/',(req,res)=>{
        res.send('Welcome to the registration page !')
    }),
    app.get('/view-data',crud.look)
    app.post('/add-data',crud.insert)
    app.delete('/delete-data', crud.delete)
    app.put('/update-data',crud.update)

}


var crud={
    look: async(req,res)=>{
        details.find().toArray(function (err, items) {
            res.send(items)
        })
    },
    
    insert: async function (req,res) {
        await details.insertOne({
            _id: req.body.id?req.body.id:null,
            name: req.body.name,
            age: req.body.age,
            msg: req.body.msg,
            email: req.body.email
        })
        res.send('Data has been sucessfully added to the database! ')
    },
    update: async(req,res)=>{
        await details.findOneAndupdate({
            _id: new mongodb.ObjectId(req.body.id)},
            {$et: {msg:req.body.msg}}
        )
        res.send('Database has been updated! ')
    },
    delete: async(req,res)=>{
        await details.deleteOne({
            _id:   mongodb.ObjectId(req.body.id)
        })
        res.send("Data has been deleted succesfully. ")
    }

}