const User = require('../Modals/user')
const bcrypt = require('bcryptjs')

exports.signUp = async (req, res) => {
    try {

        const { channelName, userName, about, profilePic, password } = req.body;

        const isExist = await User.findOne({ userName })

        if (isExist) {
            res.status(400).json({ error: "userName already Exists try with other userName" })
        }

        else {
            let updatedPassword = await bcrypt.hash(password, 10)

            const user = new User({ channelName, userName, about, profilePic, password: updatedPassword });

            await user.save();

            res.status(201).json({ message: "User regestered successfully", success: "yes", data: user })
        }

    } catch (error) {

        res.status(500).json({ error: 'Server error' })

    }

}


exports.signIn = async (req, res) => {

    try {
        const { userName, password } = req.body;

        const user = await User.findOne({ userName })

        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ message: 'Logged in successfully', success: true })
        }
        else {
            res.status(404).json({ error: 'Invalid credentials' })
        }


    } catch (error) {
        res.status(500).json({
            error: 'server error'
        });
    }

}