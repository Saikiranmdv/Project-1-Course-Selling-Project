const express = require("express")

const app = express()

app.post("user/signup", function(res, req, next){
    res.json({
        message: "user signup endpoint"
    })
})

app.post("user/signin", function(res, req, next){
    res.json({
        message: "user signin endpoint"
    })
})

app.get("user/purchases", function(res, req, next){
    res.json({
        message: "user purchases endpoint" 
    })
})

app.post("course/purchases", function(res, req, next){
    res.json({
        message: "purchases endpoint"
    })
})

app.get("/courses", function(res, req, next){
    res.json({
        message: "courses endpoint"
    })
})