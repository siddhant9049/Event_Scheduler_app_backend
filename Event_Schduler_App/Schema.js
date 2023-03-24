const mongoose = require("mongoose")

// const Schema = mongoose.Schema

const Event = new mongoose.Schema({
    
    title: {type:String,required:true},
    description:{type:String ,required:true},
    location:{type:String,required:true},
    starttime:{type:Date,required:true},
    endtime:{type:Date,required:true}
})


const events=mongoose.model("event",Event)
module.exports=events;