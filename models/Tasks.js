const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema ({
    title:{
        type: String,
        unique: true,
        required: true,
        minlength: 3
    },
    description:{
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false
    },
}, {timestamps: true})


module.exports = mongoose.model('Task', taskSchema)


