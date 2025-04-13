const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");
const Project = require("../models/Project");

// Get all chats for a user
router.get("/", async (req, res) => {
  try {
    const chats = await Chat.find({
      participants: req.user.userId,
    })
      .populate("project", "title status")
      .populate("participants", "firstName lastName email")
      .sort({ lastMessage: -1 });

    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get chat by ID
router.get("/:id", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id)
      .populate("project", "title status")
      .populate("participants", "firstName lastName email")
      .populate("messages.sender", "firstName lastName");

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Check if user is a participant
    if (!chat.participants.some((p) => p._id.toString() === req.user.userId)) {
      return res.status(403).json({ message: "Not authorized" });
    }

    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Create new chat
router.post("/", async (req, res) => {
  try {
    const { projectId } = req.body;

    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Check if user is authorized to create chat
    if (
      project.client.toString() !== req.user.userId &&
      !project.proposals.some(
        (p) => p.professional.toString() === req.user.userId
      )
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Check if chat already exists
    const existingChat = await Chat.findOne({ project: projectId });
    if (existingChat) {
      return res.json(existingChat);
    }

    // Create new chat
    const chat = new Chat({
      project: projectId,
      participants: [
        project.client,
        ...project.proposals.map((p) => p.professional),
      ],
    });

    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Send message
router.post("/:id/messages", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Check if user is a participant
    if (!chat.participants.includes(req.user.userId)) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const message = {
      sender: req.user.userId,
      content: req.body.content,
    };

    chat.messages.push(message);
    chat.lastMessage = new Date();
    await chat.save();

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Mark messages as read
router.put("/:id/messages/read", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Check if user is a participant
    if (!chat.participants.includes(req.user.userId)) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Mark all messages as read for the current user
    chat.messages.forEach((message) => {
      if (message.sender.toString() !== req.user.userId) {
        message.read = true;
      }
    });

    await chat.save();
    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
