
const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ایجاد ایندکس برای بهینه‌سازی کوئری‌ها
messageSchema.index({ sender: 1, receiver: 1, project: 1, createdAt: -1 });

module.exports = mongoose.model("Message", messageSchema); 
const mongoose = require("mongoose");
 