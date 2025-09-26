const express = require("express")

require('./Connections/conn.js')

const AuthRoutes = require('./Routes/user.js')
const videoRoutes = require('./Routes/video.js')

const commentRoutes = require('./Routes/comment.js')

const cookieParser = require('cookie-parser')

const cors = require('cors')



const app = express();

app.use(express.json())

app.use(cookieParser())

app.use(cors())

const port = 3000;



app.use('/auth', AuthRoutes);
app.use('/api', videoRoutes);
app.use('/commentApi', commentRoutes)

app.listen(port, () => {
    console.log("our backend project is running on 3000")
})