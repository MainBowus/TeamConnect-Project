const { default: mongoose } = require('mongoose')
const moogoose = require('mongoose')

const EmployeeSchema = new moogoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel