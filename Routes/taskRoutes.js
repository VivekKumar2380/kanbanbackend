const express = require("express");
const router = express.Router();
const taskController = require("../Controllers/taskController");

router.post("/", taskController.createTask);

router.get("/", taskController.getAllTasks);

router.get("/:taskId", taskController.getTaskById);

router.patch("/:taskId/status", taskController.updateTaskStatus);

router.delete("/:taskId", taskController.deleteTask);

module.exports = router;
