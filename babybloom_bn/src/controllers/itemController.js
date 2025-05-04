const db = require('../config/db');
const multer = require('multer');
const path = require('path');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this directory exists!
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Initialize Multer middleware
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only JPEG, PNG, and GIF images are allowed!'), false);
    }
    cb(null, true);
  }
});

exports.upload = upload;

exports.addItem = (req, res) => {
  const { name, description, price, size, category, inStock } = req.body;w
  const image = req.file ? req.file.filename : null;

  // Validate required fields
  if (!name || !price || !image) {
    return res.status(400).json({ message: "Name, price, and image are required." });
  }

  const sql = `
    INSERT INTO items (name, description, price, image_url, size, category, in_stock)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, 
    [name, description, price, image, size, category, inStock], 
    (err, result) => {
      if (err) {
        console.error("Error inserting item:", err);
        return res.status(500).json({ message: "Database error." });
      }

      // Return the new item without a separate query
      const newItem = {
        id: result.insertId,
        name,
        description,
        price,
        image_url: image,
        size,
        category,
        in_stock: inStock
      };
      
      res.status(201).json({ 
        message: "Item added successfully!", 
        item: newItem 
      });
    }
  );
};

exports.getAllItems = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM items');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};