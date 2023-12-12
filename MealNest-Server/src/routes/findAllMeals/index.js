const express = require('express');
const findAllMeals = require('../../apis/Meals/findAllMeals');
const router = express.Router();

// const mealCollection = mongoose.model('meal', mongoose.Schema({}), 'meals')
router.get('/meals', findAllMeals)


module.exports = router;