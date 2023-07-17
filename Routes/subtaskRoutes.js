const express = require("express");
const router = express.Router();
const subtaskController = require("../Controllers/subtaskController");

router.post("/", subtaskController.createSubtask);

router.patch("/:subtaskId/status", subtaskController.updateSubtaskStatus);

router.delete("/:subtaskId", subtaskController.deleteSubtask);

module.exports = router;
