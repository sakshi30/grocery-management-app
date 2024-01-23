
const adminService = require('../services/adminService');

const addItem = async (req, res) => {
  try {
    const newItem = await adminService.addItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const viewItems = async (req, res) => {
  try {
    const items = await adminService.viewItems();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const removeItem = async (req, res) => {
  try {
    await adminService.removeItem(req.params.itemId);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateItem = async (req, res) => {
  try {
    const updatedItem = await adminService.updateItem(req.params.itemId, req.body);
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const manageInventory = async (req, res) => {
  try {
    const updatedItem = await adminService.manageInventory(req.params.itemId, req.body.quantity);
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addItem,
  viewItems,
  removeItem,
  updateItem,
  manageInventory,
};
