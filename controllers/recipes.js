const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');
// routes will be under here 

router.get('/', async (req, res) => {
    res.render('recipes/index.ejs');
  });

module.exports = router;