const express = require("express")

require('./Connections/conn.js')

const app = express();

app.use(express.json())

const port = 3000;

const AuthRoutes = require('./Routes/user.js')

app.use('/auth', AuthRoutes);

app.listen(port, () => {
    console.log("our backend project is running on 3000")
})