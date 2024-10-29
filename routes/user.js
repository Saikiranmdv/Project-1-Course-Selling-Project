const { Router } = require("express")

const userRouter = Router();

userRouter.post("/signup", function(req, res){
    res.json({
        message: "user signup endpoint"
    })
})

userRouter.post("/signin", function(req, res){
    res.json({
        message: "user signin endpoint"
    })
})

userRouter.get("/purchases", function(res, req, next){
    res.json({
        message: "user purchases endpoint" 
    })
})

module.exports = {
    userRouter: userRouter
}