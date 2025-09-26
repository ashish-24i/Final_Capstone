const express = require("express")

require('./Connections/conn.js')

const AuthRoutes = require('./Routes/user.js')
const videoRoutes = require('./Routes/video.js')

const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json())

app.use(cookieParser())

const port = 3000;



app.use('/auth', AuthRoutes);
app.use('/api', videoRoutes)

app.listen(port, () => {
    console.log("our backend project is running on 3000")
})