const express = require("express")
const {UserRoutes} = require("./routes/user")
const {CourseRoutes} = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express()

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/admin", UserRoutes);
app.use("/api/v1/course", CourseRoutes);

app.listen(3000, ()=>{
    console.log("running on port 3000")
})