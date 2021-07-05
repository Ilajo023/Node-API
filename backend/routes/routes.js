const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
const categoryController = require('../controllers/categoryController');
const listController = require('../controllers/listController');

//Shop routes
router.get('/shops/:id', shopController.get_specific_shop);
router.get('/shops', shopController.get_all_shops);
router.post('/shop', shopController.create_shop);

//get all categories
router.get('/categories', categoryController.get_all_categories);
//create category
router.post('/category', categoryController.create_category);
//specific category
router.get('/categories/:id', categoryController.get_specific_category);

//list routes
router.get('/lists', listController.get_lists);

//get specific list
router.get('/list/:id', listController.get_specific_list);

//create list
router.post('/list', listController.create_list);

//update list
router.put('/list/:id', listController.update_list);

//delete list
router.delete('/lists/:id', listController.delete_list);

//create list item
router.post('/list/:id/item', listController.create_list_item);

//get specific list item
router.get('/lists/:listId/items/:itemId', listController.get_specific_item);

// Get list items

router.get('/lists/:id/items', listController.get_list_items);

//updating list item

router.put('/lists/:listId/items/:itemId', listController.update_list_item);

// deleting list item

router.delete('/lists/:listId/items/:itemId', listController.delete_list_item);

module.exports = router;
