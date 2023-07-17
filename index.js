const express = require("express");
const { connection } = require("./db");
const boardRoutes = require("./Routes/boardRoutes");
const taskRoutes = require("./Routes/taskRoutes");
const subtaskRoutes = require("./Routes/subtaskRoutes");
const cors = require("cors");
const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/boards", boardRoutes);
app.use("/tasks", taskRoutes);
app.use("/subtasks", subtaskRoutes);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to the Db");
    console.log("server is running at port 8080");
  } catch (error) {
    console.log(error);
  }
});
