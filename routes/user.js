const { Router } = require("express");
const { userModel } = require("../db");
const zod = require("zod")

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)
//TODO : adding zod validation
//TODO: hash the password so plaintxt is not stored

const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = "keavbliebivh"

const userRouter = Router();

userRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName} = req.body
    //Add Zod Validations
    //hash the password as plain text is not stored in db
    
    try {
        
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    
    res.json({
        message: "user signup endpoint succeded"
    })
    } catch (error) {
        
    }
})

userRouter.post("/signin", async function(req, res){
    const { email, password } = req.body

    const user = await userModel.find({
        email: email,
        password: password
    });

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)
    }

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