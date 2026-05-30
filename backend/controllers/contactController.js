const Contact = require('../models/contactModel');

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Contact Submitted',
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getContact = async (req, res) => {
  try {
    const contact = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      total: contact.length,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createContact, getContact };
