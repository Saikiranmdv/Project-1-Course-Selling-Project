const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")

const app = express()
app.use(express.json())

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    const dbUser = process.env.DB_USER
    const dbPassword = process.env.DB_PASSWORD
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.vabji.mongodb.net/coursera-app`)
    app.listen(3000)
    console.log("running on port 3000")
}
main()