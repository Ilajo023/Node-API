const Shop = require('../models/Shop');

const create_shop = async (req, res) => {
  try {
    const newShop = new Shop({
      name: req.body.shopName,
      address: req.body.shopAddress,
      city: req.body.shopCity,
    });
    const result = await newShop.save();
    res.status(201).json(result);
  } catch (err) {
    console.log({ message: err });
    res.status(500).send(err);
  }
};

const get_specific_shop = async (req, res) => {
  try {
    const id = req.params.id;
    const specificShop = await Shop.findById(id).exec();
    res.status(200).json(specificShop);
  } catch (err) {
    console.log({ message: err });
    res.status(500).send(err);
  }
};

const get_all_shops = async (req, res) => {
  try {
    const getShops = await Shop.find().exec();
    res.status(200).json(getShops);
  } catch (err) {
    console.log({ message: err });
    res.status(500).send(err);
  }
};

module.exports = { create_shop, get_specific_shop, get_all_shops };
