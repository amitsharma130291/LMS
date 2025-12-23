const express = require("express");
const { registerAdmin } = require("../../controller/staff/adminCtrl")

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
    res.json({ sucess : true, message: "Get admin"})
})

adminRouter.post("/register", registerAdmin);

adminRouter.get("/login", (req, res) => {
    res.json({ sucess : true, message: "Login called by admin"})
})

module.exports = adminRouter;

