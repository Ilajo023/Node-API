const Category = require('../models/Category');

//create category
const create_category = async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.categoryName,
      description: req.body.categoryDescription,
    });
    const result = await newCategory.save();
    res.json(result);
    res.status(201);
  ;
  } catch (err) {
    console.log({ message: err });
  }
};

//get all categories
const get_all_categories = async (req, res) => {
  try {
    const allCategories = await Category.find().exec();
    res.json(allCategories);
    res.status(200);
  } catch (err) {
    console.log({ message: err });
  }
};

//get specific category
const get_specific_category = async (req, res) => {
  try {
    const id = req.params.id;
    const specificCategory = await Category.findById(id).exec();
    res.json(specificCategory)
    res.status(200);
  } catch (err) {
    console.log({ message: err });
  }
};

module.exports = { create_category, get_all_categories, get_specific_category };
