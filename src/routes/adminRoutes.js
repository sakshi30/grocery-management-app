const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/add-item', adminController.addItem);
router.get('/view-items', adminController.viewItems);
router.delete('/remove-item/:itemId', adminController.removeItem);
router.put('/update-item/:itemId', adminController.updateItem);
router.patch('/manage-inventory/:itemId', adminController.manageInventory);

module.exports = router;