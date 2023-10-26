const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

//desc Get all notes
//@route get /api/contacts
//@access private

const getNotes = asyncHandler(async (req, res) => {
  let filter = {};
  if (req.params.id) filter = { receiver: req.params.id };
  console.log(filter, req.params);
  const notes = await Note.find(filter);
  res.status(200).json(notes);
});

//desc post notes
//@route Post /api/notes
//@access public
const createNotes = asyncHandler(async (req, res) => {
  console.log("start");
  console.log(req.body);
  if (!req.body) {
    res.status(404);
    throw new Error("no feeds");
  }
  let { message, receiver } = req.body;
  if (!req.body.receiver) req.body.receiver = req.params.id;
  if (!message) {
    res.status(400);
    console.log(res.statusCode);
    throw new Error("all feeds are required");
  }
  const notes = await Note.create({
    message,
    receiver: req.body.receiver,
  });

  res.status(201).json(notes);
});

module.exports = {
  getNotes,
  createNotes,
};
