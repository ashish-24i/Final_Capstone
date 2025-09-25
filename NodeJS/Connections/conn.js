const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Youtubeclone")
    .then(() => console.log("db connection successfull"))
    .catch((err) => console.log(err))