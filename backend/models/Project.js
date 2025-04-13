const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
    },
  },
  status: {
    type: String,
    enum: ["draft", "open", "in_progress", "completed", "cancelled"],
    default: "open",
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  proposals: [
    {
      professional: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      price: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number, // در روز
        required: true,
      },
      message: {
        type: String,
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

// ایجاد ایندکس برای جستجوی مکانی
projectSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Project", projectSchema);
