const List = require('../models/List');

//create list
const create_list = async (req, res) => {
  try {
    const newList = new List({
      name: req.body.listName,
      description: req.body.listDescription,
      shop: req.body.listShop,
    });
    await newList.save();
    res.status(201).json('List created');
  } catch (err) {
    console.log({ message: err });
  }
};

//get specific list
const get_specific_list = async (req, res) => {
  try {
    const id = req.params.id;
    const specificList = await List.findById(id).exec();
    res.status(200).json(specificList);
  } catch (err) {
    console.log({ message: err });
  }
};
//get all lists
const get_lists = async (req, res) => {
  try {
    const getAllLists = await List.find().exec();
    res.status(200).json(getAllLists);
  } catch (err) {
    console.log({ message: err });
  }
};
//update list
const update_list = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.listName;
    const shop = req.body.listShop;

    const update = await List.findById(id).exec();
    update.name = name;
    update.shop = shop;

    const updated = await update.save();
    res.status(201).json(updated);
  } catch (err) {
    console.log({ message: err });
  }
};
//delete list

const delete_list = async (req, res) => {
  try {
    const id = req.params.id;
    await List.findByIdAndRemove(id).exec();
    res.status(200).json('List deleted');
  } catch (err) {
    console.log({ message: err });
  }
};

//create list item
const create_list_item = async (req, res) => {
  try {
    const id = req.params.id;
    const item = {
      name: req.body.itemName,
      category: req.body.itemCategory,
      quantity: req.body.itemQuantity,
    };
    const list = await List.findById(id).exec();
    list.items.push(item);
    const result = await list.save();
    res.status(201).json(result);
  } catch (err) {
    console.log({ message: err });
  }
};

//get list items
const get_list_items = async (req, res) => {
  try {
    const id = req.params.id;
    const getItems = await List.findById(id).populate('items.category').exec();
    res.status(200).json(getItems);
  } catch (err) {
    console.log({ message: err });
  }
};

//get specific list item
const get_specific_item = async (req, res) => {
  try {
    const listId = req.params.listId;
    const itemId = req.params.itemId;
    const specificList = await List.findById(listId)
      .populate('items.category')
      .exec();
    let item = specificList.items.id(itemId);
    res.json(item);
    res.status(200);
  } catch (err) {
    console.log({ message: err });
  }
};

//update list item
const update_list_item = async (req, res) => {
  try {
    const listId = req.params.listId;
    const itemId = req.params.itemId;
    const name = req.body.itemName;
    const category = req.body.itemCategory;
    const quantity = req.body.itemQuantity;

    const specificList = await List.findById(listId).exec();
    let item = specificList.items.id(itemId);
    item.name = name;
    item.category = category;
    item.quantity = quantity;
    const updated = await specificList.save();
    res.status(201).json(updated);
  } catch (err) {
    console.log({ message: err });
  }
};
//delete list item
const delete_list_item = async (req, res) => {
  try {
    const listId = req.params.listId;
    const itemId = req.params.itemId;

    const updateList = await List.findById(listId).exec();
    const updatedListItem = await updateList.items.filter(item => {
      return item._id.toString() !== itemId.toString();
    });
    updateList.items = updatedListItem;
    const result = await updateList.save();
    res.status(200).json(result);
  } catch (err) {
    console.log({ message: err });
  }
};

module.exports = {
  create_list,
  get_specific_list,
  get_lists,
  update_list,
  delete_list,
  create_list_item,
  get_list_items,
  get_specific_item,
  update_list_item,
  delete_list_item,
};
