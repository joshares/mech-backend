const asyncHandler = require("express-async-handler");
const JobCard = require("../models/jobcardModel");

//desc Get all jobcard project
//@route get /api/contacts
//@access private

const getJobCard = asyncHandler(async (req, res) => {
  let filter = {};
  if (req.params.projectId) {
    filter = { project: req.params.projectId };
    console.log(filter, req.params);
    const jobcard = await JobCard.find(filter);
    res.status(200).json(jobcard);
  } else if (req.params.clientId) {
    filter = { client: req.params.clientId };
    console.log(filter, req.params);
    const jobcard = await JobCard.find(filter);
    res.status(200).json(jobcard);
  } else {
    res.status(404);
    throw new Error("no client or project id");
  }
});

//desc post jobcard
//@route Post /api/jobcard
//@access public
const createJobCard = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(401);
    throw new Error("no feeds");
  }
  if (!req.body.project) req.body.project = req.params.projectId;
  const { bodyReport, mechReport, electReport, approved, client } = req.body;

  console.log(req.params.projectId);
  const jobcard = await JobCard.create({
    bodyReport,
    mechReport,
    electReport,
    approved,
    client,
    project: req.body.project,
  });

  res.status(201).json(jobcard);
});

//desc delete contacts
//@route delete /api/contacts/:id
//@access public
const deleteJobCard = asyncHandler(async (req, res) => {
  const jobcard = await JobCard.findById(req.params.id);
  if (!jobcard) {
    res.status(404);
    throw new Error("jobcard not found");
  }
  await JobCard.deleteOne({ _id: req.params.id });
  res.status(200).json(jobcard);
});

module.exports = {
  getJobCard,
  createJobCard,
  deleteJobCard,
};
