const {Router} = require("express")
const adminRouter = Router()
const {adminModel} = require("../db")


adminRouter.post("/signup", function(req, res){
    res.json({
        message: "admin sign up"
    })
})


adminRouter.post("/signin", function(req, res){
    res.json({
        message: "admin sign in"
    })
})


adminRouter.post("/course", function(req, res){
    res.json({
        message: "admin course Creation"
    })
})

adminRouter.put("/course", function(req, res){
    res.json({
        message: "admin course name , image "
    })
})

adminRouter.get("/course/bulk", function(req, res){
    res.json({
        message: "admin course Creation"
    })
})

module.exports = {
    adminRouter: adminRouter
}