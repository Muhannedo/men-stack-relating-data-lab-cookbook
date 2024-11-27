const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Recipe = require("../models/recipe.js");
const Ingredient = require("../models/ingredients.js");

// routes will be under here

//rendering the landing page
router.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.render("recipes/index.ejs", { recipes });
});
// controllers/recipes.js
router.get("/new", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.render("recipes/new.ejs", { ingredients });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

// saving the recioes in the DB
router.post("/", async (req, res) => {
  try {
    req.body.owner = req.session.user._id;
    await Recipe.create(req.body);
    res.redirect("/recipes");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

//rendering the show page
router.get("/:recipeId", async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId);
  const ingredients = await Ingredient.find();
  res.render("recipes/show.ejs", { recipe, ingredients });
});

router.get("/:recipeId/edit", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    const ingredients = await Ingredient.find();
    if (recipe.owner.equals(req.session.user._id)) {
      res.render("recipes/edit.ejs", { recipe, ingredients });
    } else {
      res.send("You are not allowed to edit this recipe");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});
//updating the recipe
router.put("/:recipeId", async (req, res) => {
  await Recipe.findByIdAndUpdate(req.params.recipeId, req.body);
  res.redirect(`${req.params.recipeId}`);
});

//deleting the recipe
router.delete("/:recipeId", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    if (recipe.owner.equals(req.session.user._id)) {
      await Recipe.findByIdAndDelete(req.params.recipeId);
      res.redirect("/recipes");
    } else {
      res.send("You are not allowed to delete this recipe");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});
module.exports = router;
