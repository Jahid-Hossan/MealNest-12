const { Schema, default: mongoose, model } = require('mongoose');


const mealSchema = new Schema({});


const aMeal = model("meals", mealSchema);
module.exports = aMeal;