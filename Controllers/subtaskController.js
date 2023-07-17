const Subtask = require("../Models/subtask");

const createSubtask = async (req, res) => {
  try {
    const { title, isCompleted } = req.body;
    const subtask = new Subtask({ title, isCompleted });
    await subtask.save();
    res.status(201).json(subtask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create subtask" });
  }
};

const updateSubtaskStatus = async (req, res) => {
  try {
    const { subtaskId } = req.params;
    const { isCompleted } = req.body;
    const subtask = await Subtask.findByIdAndUpdate(
      subtaskId,
      { isCompleted },
      { new: true }
    );
    if (!subtask) {
      return res.status(404).json({ error: "Subtask not found" });
    }
    res.json(subtask);
  } catch (error) {
    res.status(500).json({ error: "Failed to update subtask status" });
  }
};

const deleteSubtask = async (req, res) => {
  try {
    const { subtaskId } = req.params;
    const subtask = await Subtask.findByIdAndDelete(subtaskId);
    if (!subtask) {
      return res.status(404).json({ error: "Subtask not found" });
    }
    res.json({ message: "Subtask deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete subtask" });
  }
};

module.exports = { createSubtask, updateSubtaskStatus, deleteSubtask };
