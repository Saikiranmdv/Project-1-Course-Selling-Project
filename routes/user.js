const { Router } = require("express");
const { userModel } = require("../db");
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
//TODO : adding zod validation
//TODO: hash the password so plaintxt is not stored

const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "keavbliebivh";

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  //Add Zod Validations
  //hash the password as plain text is not stored in db

  try {
    await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    res.json({
      message: "user signup endpoint succeded",
    });
  } catch (error) {
    res.json({
      message: `${error}`,
    });
  }
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  //ideally password should be hashed and hence cant compare user nad db password
  const user = await userModel.findOne({
    // finds all users with the username and password
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );
    
    //if using cookies do cookie logic
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "incorrect credentials",
    });
  }

});

userRouter.get("/purchases", function (res, req, next) {
  res.json({
    message: "user purchases endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
