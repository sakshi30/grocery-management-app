// src/services/adminService.js

const GroceryItem = require('../models/GroceryItem');

const addItem = async (itemData) => {
  const newItem = await GroceryItem.create(itemData);
  return newItem.toJSON();
};

const viewItems = async () => {
  const items = await GroceryItem.findAll();
  return items.map((item) => item.toJSON());
};

const removeItem = async (itemId) => {
  await GroceryItem.destroy({
    where: { id: itemId },
  });
};

const updateItem = async (itemId, updatedData) => {
  const [rowsUpdated] = await GroceryItem.update(updatedData, {
    where: { id: itemId },
    returning: true,
  });

  if (rowsUpdated === 0) {
    throw new Error('Item not found');
  }

  const updatedItem = await GroceryItem.findByPk(itemId);
  return updatedItem.toJSON();
};

const manageInventory = async (itemId, quantity) => {
  const item = await GroceryItem.findByPk(itemId);

  if (!item) {
    throw new Error('Item not found');
  }

  item.inventory += quantity;
  await item.save();

  return item.toJSON();
};

module.exports = {
  addItem,
  viewItems,
  removeItem,
  updateItem,
  manageInventory,
};
