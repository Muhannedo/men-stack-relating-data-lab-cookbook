// controllers/ingredients.js
const express = require("express");
const router = express.Router();
const Ingredient = require("../models/ingredients");

// Index route
router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.render("ingredients/index.ejs", { ingredients });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

// Create route
router.post("/", async (req, res) => {
  try {
    await Ingredient.create(req.body);
    res.redirect("/ingredients");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
