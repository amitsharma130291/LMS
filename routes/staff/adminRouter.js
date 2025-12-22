const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
    res.json({ sucess : true, message: "Get admin"})
})

adminRouter.get("/register", (req, res) => {
    res.json({ sucess : true, message: "Register admin"})
})

adminRouter.get("/login", (req, res) => {
    res.json({ sucess : true, message: "Login called by admin"})
})

module.exports = adminRouter;

