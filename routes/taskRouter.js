const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  getOneTask,
  deleteTask,
} = require("../controller/taskController.js");

//get all task './task'
router.get("/tasks", getTasks);
// create a task './task'
router.post("/tasks", createTask);

//get one task './task : id'
router.get("/tasks/:taskid", getOneTask);
//Update one task './task : id'
router.patch("/tasks/:taskid");

//Delete one task './task : id'
router.delete("/tasks/:taskid", deleteTask);

module.exports = router;
