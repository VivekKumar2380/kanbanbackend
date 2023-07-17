const Board = require("../Models/board");

const createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    const board = new Board({ name });
    await board.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to create board" });
  }
};

const getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (error) {
    res.status(500).json({ error: "Failed to get boards" });
  }
};

const getBoardById = async (req, res) => {
  try {
    const { boardId } = req.params;
    const board = await Board.findById(boardId).populate("tasks");
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    res.json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to get board" });
  }
};

const updateBoardName = async (req, res) => {
  try {
    const { boardId } = req.params;
    const { name } = req.body;
    const board = await Board.findByIdAndUpdate(
      boardId,
      { name },
      { new: true }
    );
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    res.json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to update board name" });
  }
};

const deleteBoard = async (req, res) => {
  try {
    const { boardId } = req.params;
    const board = await Board.findByIdAndDelete(boardId);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    res.json({ message: "Board deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete board" });
  }
};

module.exports = {
  createBoard,
  getAllBoards,
  getBoardById,
  updateBoardName,
  deleteBoard,
};
