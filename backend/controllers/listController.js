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
    res.json('List created');
  } catch (err) {
    console.log({ message: err });
  }
};

//get specific list
const get_specific_list = async (req, res) => {
  try {
    const id = req.params.id;
    const specificList = await List.findById(id).exec();
    res.json(specificList);
    res.status(200);
  } catch (err) {
    console.log({ message: err });
  }
};
//get all lists
const get_lists = async (req, res) => {
  try {
    const getAllLists = await List.find().exec();
    res.json(getAllLists);
    res.status(200);
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
    list.listName = name;
    list.listShop = shop;

    const updated = await update.save();
    res.json(updated);
    res.status(201);
  } catch (err) {
    console.log({ message: err });
  }
};
//delete list

const delete_list = async (req, res) => {
  try {
    const id = req.params.id;
    await List.findByIdAndRemove(id).exec();
    res.json('List deleted');
    res.status(200);
  } catch (err) {
    console.log({ message: err });
  }
};


//create list item
const create_list_item = async (req, res) => {
  try {
    const id = req.params.id;
    const item = req.body;
    const list = await List.findById(id).exec();
    list.items.push(item);
    const result = await list.save();
    res.json(result);
    res.status(201);
  } catch (err) {
    console.log({ message: err });
  }
};

//get list items
const get_list_items = async (req, res) => {
  try {
    const id = req.params.id;
    const getItems = await List.findById(id).populate('items.category').exec();
    res.json(getItems);
    res.status(200);
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
  try{
  const listId = req.params.listId;
  const itemId = req.params.itemId;
  const name = req.body.name;
  const category = req.body.category;
  const quantity = req.body.quantity;

  const specificList = await List.findById(listId).exec();
  let item = specificList.items.id(itemId);
  item.name = name;
  item.category = category;
  item.quantity = quantity;
  const updated = await specificList.save();
  res.json(updated);
  res.status(201);
  }catch(err) {
    console.log({message: err});
  }
};
//delete list item
const delete_list_item = async (req, res) => {
  try {
    const listId = req.params.listId;
    const itemId = req.params.itemId;

    const updateList =  await List.findById(listId).exec();
    const updatedListItem = await updateList.items.filter((item) => {
      item._id.toString() !== itemId.toString();
    });
    updateList.items = updatedListItem;
    const result = await updateList.save();
    res.json(result);
    res.status(200)
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
