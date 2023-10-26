const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

//desc Get all task
//@route get /api/task
//@access private

const getTasks = asyncHandler(async (req, res) => {
  let filter = {};
  if (req.params.projectId) {
    filter = { project: req.params.projectId };
    console.log(filter, req.params);
    const task = await Task.find(filter);
    res.status(200).json(task);
  } else if (req.params.teamId) {
    filter = { assignTo: req.params.teamId };
    console.log(filter, req.params);
    const task = await Task.find(filter);
    res.status(200).json(task);
  } else {
    filter = { status: "in progress" };
    filter = req.query;
    console.log(filter);
    const task = await Task.find(filter);
    res.status(200).json(task);
  }
});

//desc Get singe  task
//@route get /api/ task/:id
//@access private

const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  console.log(task);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  } else {
    res.status(200).json(task);
  }
});

//desc post task
//@route Post task
//@access public
const createTask = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(401);
    throw new Error("no feeds");
  }
  if (!req.body.project) req.body.project = req.params.projectId;
  const { assignTo, taskTitle, dueDate } = req.body;
  if (!assignTo || !taskTitle || !dueDate) {
    res.status(400);
    console.log(res.statusCode);
    throw new Error("all feeds are required");
  }

  console.log(req.params.projectId, req.body);

  const task = await Task.create(req.body);

  res.status(201).json(task);
});

//desc update  task
//@route Put /api/task/:id
//@access public
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("task not found");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

//desc delete task
//@route delete /api/task/:id
//@access public
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("task not found");
  }
  await Task.deleteOne({ _id: req.params.id });
  res.status(200).json(task);
});

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
