const express = require("express")
const morgan = require("morgan")
const app = express();
const adminRouter = require("../routes/staff/adminRouter")

app.use(express.json())
app.use(morgan("dev"));

app.use("/api/v1/admin", adminRouter)

module.exports = app