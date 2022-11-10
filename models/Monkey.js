const mongoose = require("mongoose")
const MonkeySchema = mongoose.Schema({
Monkey_name: String,
Monkey_gender: String,
Monkey_age: Number
})
module.exports = mongoose.model("Monkey",MonkeySchema)