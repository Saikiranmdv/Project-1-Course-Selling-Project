const {Router} = require("express");

const courseRouter = Router();

courseRouter.post("/purchases", function(res, req, next){
    res.json({
        message: "purchases endpoint"
    })
})

courseRouter.get("/preview", function(res, req, next){
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    courseRouter : courseRouter
}