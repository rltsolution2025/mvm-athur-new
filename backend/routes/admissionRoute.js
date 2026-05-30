const express = require('express');

const router = express.Router();

const { createAdmission, getAdmission } = require('../controllers/admissionController');

router.post('/add', createAdmission);

router.get('/', getAdmission);
module.exports = router;
