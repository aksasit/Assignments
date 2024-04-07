const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sahooasit621:clymCAlUik1XyWjK@cluster0.9x6jgj2.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo: todo
}