const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const User = require("../models/User");

// Create new project
router.post("/", async (req, res) => {
  try {
    const project = new Project({
      ...req.body,
      client: req.user.userId,
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all projects with filters
router.get("/", async (req, res) => {
  try {
    const {
      category,
      minBudget,
      maxBudget,
      city,
      status,
      profession,
      experience,
      sortBy = "createdAt",
      sortOrder = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};

    // Apply filters
    if (category) query.category = category;
    if (status) query.status = status;
    if (city) query["address.city"] = city;
    if (profession) query["proposals.professional.profession"] = profession;
    if (experience)
      query["proposals.professional.experience"] = {
        $gte: parseInt(experience),
      };

    // Budget range
    if (minBudget || maxBudget) {
      query.budget = {};
      if (minBudget) query.budget.min = { $gte: parseInt(minBudget) };
      if (maxBudget) query.budget.max = { $lte: parseInt(maxBudget) };
    }

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Sort options
    const sort = {};
    sort[sortBy] = sortOrder === "desc" ? -1 : 1;

    // Get projects with pagination
    const projects = await Project.find(query)
      .populate("client", "firstName lastName email")
      .populate(
        "proposals.professional",
        "firstName lastName profession experience rating"
      )
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Project.countDocuments(query);

    res.json({
      projects,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get nearby projects
router.get("/nearby", async (req, res) => {
  try {
    const { longitude, latitude, maxDistance = 10000 } = req.query; // maxDistance in meters

    const projects = await Project.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseInt(maxDistance),
        },
      },
    })
      .populate("client", "firstName lastName email")
      .populate(
        "proposals.professional",
        "firstName lastName profession experience rating"
      );

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("client", "firstName lastName email")
      .populate(
        "proposals.professional",
        "firstName lastName profession experience rating"
      );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Submit proposal for project
router.post("/:id/proposals", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const proposal = {
      professional: req.user.userId,
      price: req.body.price,
      duration: req.body.duration,
      description: req.body.description,
    };

    project.proposals.push(proposal);
    await project.save();

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Accept proposal
router.put("/:id/proposals/:proposalId/accept", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Check if user is the project owner
    if (project.client.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const proposal = project.proposals.id(req.params.proposalId);
    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }

    proposal.status = "accepted";
    project.status = "in-progress";
    project.selectedProposal = proposal.professional;

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update project status
router.put("/:id/status", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.status = req.body.status;
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
