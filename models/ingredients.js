const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true,
    
    },
    quantity:{
        type: String,
        require: true,
    },
    unit:{
        type:String,
        enum: ['g','kg','ml','l','cup','tbsp','tsp','oz','lb','piece']
    }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
