const {Router} = require("express")
const adminRouter = Router()
const {adminModel} = require("../db")
const jwt = require("jsonwebtoken");

const JWT_ADMIN_PASSWORD = "12e434232edr324"

adminRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName } = req.body;
  //Add Zod Validations
  //hash the password as plain text is not stored in db

  try {
    await adminModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    res.json({
        message: "admin sign up"
    })
  } catch (error) {
    res.json({
      message: `${error}`,
    });
  }
})


adminRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;

  //ideally password should be hashed and hence cant compare user nad db password
  const admin = await adminModel.findOne({
    // finds all users with the username and password
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
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