const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Recipe = require("../models/recipe.js");
// routes will be under here
//rendering the landing page
router.get("/", async (req, res) => {
  res.render("recipes/index.ejs");
});
//rendering the new page 
router.get("/new", async (req, res) => {

  res.render("recipes/new.ejs")
});


router.post('/' , async ( req , res) =>{
try{
req.body.owner = req.session.user._id;
await Recipe.create(req.body);

res.redirect('/recipes')
} catch(error){
  console.log(error)
  res.redirect('recipes')
}

})
module.exports = router;
