const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController'); // Changed this line

// Home route
router.get('/', homeController.home);

// User routes
router.post('/api/register', userController.registerUser);
router.post('/api/login', userController.loginUser);

// Item routes
router.post("/api/items", itemController.upload.single("image"), itemController.addItem); // Fixed this line
router.get("/api/items", itemController.getAllItems);

module.exports = router;