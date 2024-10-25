const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// New User Registration !!!
exports.registerUser = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body
        if (!name || !phone || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields !!!" })

        }
        const userExist = await User.findOne({ where: { email } })
        if (userExist) {
            return res.status(400).json({ message: "This Email is already Exist !!!" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, phone, email, password: hashedPassword })

       
        res.status(201).json({ success: true, message: "Data is created  successfully !!!", data: user })

    }
    catch (error) {
        console.error(error.message)
        return res.status(500).json({ message: "Unable to create Data !!!" })
    }
}

// Get All User data

exports.getalluser = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json({ success: true, message: "All Users  Data", data: users })

    }
    catch (error) {
        return res.status(500).json({ message: "Unable to get Datas !!!" })
    }
}

// login User

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password !!!" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Email or Password !!!" })
        }

        // token implementation
        const tokendata = { userId: user.id }

        const token = await jwt.sign(tokendata, process.env.SECRET_KEY, { expiresIn: "6h" })
        return res.cookie("token", token, { maxAge: 6 * 60 * 60 * 1000, httpOnly: true }).json({
            success: true, message: "Login Successfull !!!", userId: user.id, Name: user.name, Email: user.email, Token: token
        })
    }
    catch (error) {
        return res.status(500).json({ message: "Unable to login !!!" })

    }
}

// LogOutUser
exports.logout = async (req, res) => {
    try {

        return res.status(200).cookie("token", "", { maxAge: 0 }).json({ message: "Logged out Successfull !!!" })

    }
    catch (error) {
        return res.status(500).json({ message: "Unable to logout !!!" })
    }
}

// Updated Users
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (user) {
            await user.update(req.body);
            res.status(200).json({ success: true, message: "User Updated Successfully!!!", Data: user })

        } else {
            res.status(404).json({ message: "User Not Found!!!" })
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Unable to update user !!!" })
    }
}

// Get Single user
exports.getSingleData = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (user) {
            res.status(200).json({ success: true, message: "User Data Found!!!", Data: user })
        }
        else {
            res.status(404).json({ message: "User is not Found !!!" })
        }

    }
    catch (error) {
        return res.status(500).json({ message: "Unable to get user !!!" })
    }
}

// Delete User

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(200).json({ success: true, message: "User Deleted Successfully!!!" })
        }
        else {
            res.status(404).json({ message: "User Not Found!!!" })
        }

    }
    catch (error) {
        return res.status(500).json({ message: "Unable to delete user !!!" })
    }
}






