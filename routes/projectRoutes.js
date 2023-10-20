const express = require("express");
const notesRoutes = require("./noteRoutes");

const {
  getProjects,
  getproject,
  updateProject,
  createProject,
  deleteProject,
} = require("../controllers/projectController");

const router = express.Router();

router.route("/").get(getProjects).post(createProject);

router.route("/:id").get(getproject).put(updateProject).delete(deleteProject);

router.use("/:id/notes", notesRoutes);

module.exports = router;
