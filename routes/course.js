const {Router} = require("express");

const courseRouter = Router();

courseRouter.post("course/purchases", function(res, req, next){
    res.json({
        message: "purchases endpoint"
    })
})

courseRouter.get("/courses", function(res, req, next){
    res.json({
        message: "courses endpoint"
    })
})