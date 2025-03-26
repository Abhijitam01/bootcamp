const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const objectId = schema.objectId;

const User = new Schema({
    name:String,
    email:{
        type : String,
        required: true,
        unique : true
    },
    password: String
})

const Todo = new Schema({
    userId : String,
    title : String,
    done : boolean
})

const userModel = mongoose.model('Users' , User);
const todoModel = mongoose.model('Todos' , Todo);

module.exports = {
    userModel,
    todoModel
}