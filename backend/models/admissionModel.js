const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    class: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },

    motherName: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      requires: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Admission",admissionSchema);