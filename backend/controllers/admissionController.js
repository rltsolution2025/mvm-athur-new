const Admission = require('../models/admissionModel');

const createAdmission = async (req, res) => {
  try {
    const admission = await Admission.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Admission Submitted',
      data: admission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAdmission = async (req, res) => {
  try {
    const admission = await Admission.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: admission.length,
      data: admission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createAdmission, getAdmission };
