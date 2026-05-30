const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    studentName: String,
    parentName: String,
    email: String,
    phone: String,
    class: String,
    message: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("contact", contactSchema)