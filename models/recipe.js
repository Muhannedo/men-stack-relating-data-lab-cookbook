const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },

  ingredients:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ingredient',
  }], 

});

module.exports = mongoose.model('Recipe', recipeSchema);
