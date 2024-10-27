const { Router } = require("express")

const userRouter = Router();

userRouter.post("user/signup", function(res, req, next){
    res.json({
        message: "user signup endpoint"
    })
})

userRouter.post("user/signin", function(res, req, next){
    res.json({
        message: "user signin endpoint"
    })
})

userRouter.get("user/purchases", function(res, req, next){
    res.json({
        message: "user purchases endpoint" 
    })
})

module.exports = {
    userRouter: userRouter
}