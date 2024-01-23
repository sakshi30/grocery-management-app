// src/services/userService.js

const GroceryItem = require("../models/GroceryItem");

const viewItems = async () => {
  const items = await GroceryItem.findAll();
  return items.map((item) => item.toJSON());
};

const bookItems = async (itemIds) => {
  // Check if items exist
  const items = await GroceryItem.findAll({ where: { id: itemIds } });
  if (items.length !== itemIds.length) {
    throw new Error("One or more items not found");
  }

  // Check if items are available in sufficient quantity
  for (const item of items) {
    if (item.inventory <= 0) {
      throw new Error(`Item "${item.name}" is out of stock`);
    }
  }

  // Decrease inventory for booked items
  for (const item of items) {
    item.inventory -= 1;
    await item.save();
  }
};

module.exports = {
  viewItems,
  bookItems,
};
