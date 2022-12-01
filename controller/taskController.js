//function are here

const Tasks = require("../models/Tasks");

//get all task './task'

const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json({ noOfTasks: tasks.length, data: tasks });
  } catch (err) {
    res.status(500).json({ msg: error });
  }
};
// create a task './task'

const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(401).json({ msg: "please Provide necessary values" });
  }
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ data: task });
  } catch (err) {
    res.status(500).json({ msg: error });
  }
};

//get one task './task : id'

const getOneTask = async (req, res) => {
  const { taskid } = req.params;
  try {
    const task = await Tasks.findById({ _id: taskid });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `The Task with the id ${taskid} can not be found` });
    }
    res.status(200).json({ msg: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
//Update one task './task : id'
const updateTask = async (req, res) => {
  const {taskid} = req.params
  const {title, description,completed} = req.body
  const userBody = req.body

  try {
    const updatedTask = await Tasks.findByIdAndUpdate(
      {_id: taskid}, userBody, {new: true, runValidators: true}
    )
    if(!updateTask){
      return res.status(404).json({ msg: `The task with the id: ${taskid} cannot be found`})
    }
    res.status(200).json({msg: `Task Updated  `, data: updateTask})
  } catch (error) {
    res.status(500).json({ msg: error})
  }
}

//Delete one task './task : id'

const deleteTask = async (req, res) => {
  const { taskid } = req.params;
  try {
    const deletedTask = await Tasks.findByIdAndDelete({ _id: taskid });
    if (!deletedTask) {
      return res
        .status(401)
        .json({ msg: `The Task with the id ${taskid} can not be found` });
    }
    res.status(200).json({ msg: "otilor", deleteTask: deletedTask});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = { getTasks, createTask, getOneTask, deleteTask };
