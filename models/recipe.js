const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },

  cratedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  }, 

});

module.exports = mongoose.model('Recipe', recipeSchema);
