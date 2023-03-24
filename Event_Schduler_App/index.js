const express = require("express")
const mongoose = require("mongoose")
const bodyparser=require("body-parser")
const port = 5000
const app = express()
const events = require("./Schema")
// app.use(express.urlencoded())
// app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


mongoose.connect("mongodb://localhost:27017/ok")

app.post("/v1/events",async(req, res) => {
    try {
        const ev = await events.create({
            // id: req.body.id,
            title:req.body.title,
            description:req.body.description,
            location:req.body.location,
            starttime:req.body.starttime,
            endtime:req.body.endtime,
        })
        res.json({
            status: "Success",
            ev

        })

    }
    catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message

        })
    }
})

app.get("/v1/events",async(req, res) => {
    try {
        const ev = await events.find({events})
        res.json({
            status: "Success",
            ev

        })

    }
    catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message

        })
    }
})


app.get("/v1/events/:id",async(req, res) => {
    try {
        const ev = await events.findOne({_id:req.params.id})
        res.json({
            status: "Success",
            ev

        })

    }
    catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message

        })
    }
})

app.delete("/v1/events/:id",async(req, res) => {
    try {
        const ev = await events.deleteOne({_id:req.params.id})
        res.json({
            status: "Success",
            ev

        })

    }
    catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message

        })
    }
})


app.put("/v1/events/:id",async(req, res) => {
    try {
        const ev = await events.updateOne({_id:req.params.id},{
            // id: req.body.id,
            title:req.body.title,
            description:req.body.description,
            location:req.body.location,
            starttime:req.body.starttime,
            endtime:req.body.endtime,
        })
        res.json({
            status: "Updated Succesfully",
            ev

        })

    }
    catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message

        })
    }
})


app.listen(port, () => {
    console.log(`app is running pm port${port}`)
})
