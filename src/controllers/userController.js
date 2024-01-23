// src/controllers/userController.js

const userService = require('../services/userService');

const viewItems = async (req, res) => {
  try {
    const items = await userService.viewItems();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const bookItems = async (req, res) => {
  try {
    const { itemIds } = req.body;
    await userService.bookItems(itemIds);
    res.status(201).json({ message: 'Items booked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  viewItems,
  bookItems,
};
