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

exports.adminLogin = async(req, res) => {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    console.log(user)
    if(!user){
        res.status(404).json({ success : false, message: "Invalid login Credentials"})
    }
    if(user && await user.verifyPassword(password)){
        res.status(200).json({ success : true, user})
    }else{
        res.json({ success : false, message: "Invalid login Credential"})
    }
}