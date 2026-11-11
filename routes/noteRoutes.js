const express = require("express");
const Note = require("../models/Note");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);

// POST /api/notes
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: "title and content are required" });
    }
    const note = await Note.create({ title, content, owner: req.user._id });
    res.status(201).json({
      _id: note._id,
      title: note.title,
      content: note.content,
      owner: note.owner,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET /api/notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({ owner: req.user._id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET /api/notes/:id
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    if (note.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// PUT /api/notes/:id
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    if (note.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }
    if (req.body.title) note.title = req.body.title;
    if (req.body.content) note.content = req.body.content;
    const updated = await note.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// DELETE /api/notes/:id
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    if (note.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }
    await note.deleteOne();
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
