const express = require("express")
const {UserRoutes} = require("./routes/user")
const {CourseRoutes} = require("./routes/course")
const app = express()

app.use("/user", UserRoutes);
app.use("/course", CourseRoutes);

app.listen(3000, ()=>{
    console.log("running on port 3000")
})