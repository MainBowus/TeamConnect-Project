const express = require("express")
const moogoose = require('mongoose')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://MainBowUs:1154811548@mainbowus.xkjd3ik.mongodb.net/employee");

app.post('register', (req, res))


app.listen(3001, () =>{
    console.log("Server is running")
})