const express = require("express");
const router = express.Router();
const boardController = require("../Controllers/boardController");

router.post("/", boardController.createBoard);

router.get("/", boardController.getAllBoards);

router.get("/:boardId", boardController.getBoardById);

router.patch("/:boardId", boardController.updateBoardName);

router.delete("/:boardId", boardController.deleteBoard);

module.exports = router;
