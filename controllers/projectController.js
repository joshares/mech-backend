const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");

//desc Get all contacts
//@route get /api/contacts
//@access private

const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});

//desc Get singe contacts
//@route get /api/contacts/:id
//@access private

const getproject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  console.log(project);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  } else {
    res.status(200).json(project);
  }
});

//desc post contacts
//@route Post /api/contacts
//@access public
const createProject = asyncHandler(async (req, res) => {
  console.log("start");
  console.log(req.body);
  if (!req.body) {
    throw new Error("no feeds");
  }
  // const { name, email, address, phone, gender } = req.body;
  // if (!name || !email || !address || !phone || !gender) {
  //   res.status(400);
  //   console.log(res.statusCode);
  //   throw new Error("all feeds are required");
  // }
  const project = await Project.create(req.body);

  res.status(201).json(project);
});

//desc update  contacts
//@route Put /api/contacts/:id
//@access public
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("project not found");
  }

  const updatedClient = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedClient);
});

//desc Get all contacts
//@route delete /api/contacts/:id
//@access public
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("project not found");
  }

  console.log(req.user);
  await Project.deleteOne({ _id: req.params.id });
  res.status(200).json(project);
});

module.exports = {
  getProjects,
  getproject,
  createProject,
  updateProject,
  deleteProject,
};
