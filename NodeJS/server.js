import express from 'express'

const app = express();

const port = 3000;


app.get('/', (req, res) => {

    res.send({
        message: "hii we have started our backend"
    })

})

app.listen(port, () => {
    console.log("our backend project is running on 3000")
})