const express = require('express');

const router = express.Router();

const { createContact } = require('../controllers/contactController');
const { getContact } = require('../controllers/contactController');

router.post('/add', createContact);
router.get('/', getContact);
module.exports = router;
