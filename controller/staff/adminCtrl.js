const Admin = require("../../model/Staff/Admin")
exports.registerAdmin = async(req, res) => {
    const { name, email, password } = req.body
    const adminexists = await Admin.findOne({ email })
    if (adminexists) {
        res.status(400).send({ success: false, message: "Admin already exists." })
    } else {
        const user = await Admin.create({
            name, email, password
        })
        res.status(201).json({
            success: true,
            data: user
        })
    }
}