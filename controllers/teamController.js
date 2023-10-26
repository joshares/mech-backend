const asyncHandler = require("express-async-handler");
const Team = require("../models/teamModel");

//desc Get all team
//@route get /api/contacts
//@access private

const getTeams = asyncHandler(async (req, res) => {
  const teams = await Team.find();
  res.status(200).json(teams);
});

//desc Get singe team
//@route get /api/contacts/:id
//@access private

const getTeam = asyncHandler(async (req, res) => {
  const team = await Team.findById(req.params.id);
  console.log(team);
  if (!team) {
    res.status(404);
    throw new Error("Team not found");
  } else {
    res.status(200).json(team);
  }
});

//desc post teams
//@route Post /api/contacts
//@access public
const createTeam = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(404);
    throw new Error("no feeds");
  }
  const {
    firstName,
    email,
    lastName,
    phone,
    status,
    address,
    type,
    balance,
    role,
  } = req.body;
  if (!firstName || !email || !lastName || !phone) {
    res.status(400);
    console.log(res.statusCode);
    throw new Error("all feeds are required");
  }
  const team = await Team.create(req.body);
  console.log("ork");
  // if (!team) {
  //   res.status(404);
  //   throw new error("failed to create team");
  // }

  if (team) res.status(201).json(team);
});

//desc update  team
//@route Put /api/contacts/:id
//@access public
const updateTeam = asyncHandler(async (req, res) => {
  const team = await Team.findById(req.params.id);
  if (!team) {
    res.status(404);
    throw new Error("team not found");
  }

  const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTeam);
});

//desc Get all team
//@route delete /api/contacts/:id
//@access public
const deleteTeam = asyncHandler(async (req, res) => {
  const team = await Team.findById(req.params.id);
  if (!team) {
    res.status(404);
    throw new Error("team not found");
  }

  console.log(req.user);
  await Team.deleteOne({ _id: req.params.id });
  res.status(200).json(team);
});

module.exports = {
  getTeam,
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
};
