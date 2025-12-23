const express = require("express");
const { registerAdmin, adminLogin } = require("../../controller/staff/adminCtrl")

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
    res.json({ sucess : true, message: "Get admin"})
})

adminRouter.post("/register", registerAdmin);

adminRouter.post("/login", adminLogin)

module.exports = adminRouter;

