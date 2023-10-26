const express = require("express");
const notesRoutes = require("./noteRoutes");
const jobCardRoutes = require("./jobCardRoutes");
const taskRoutes = require("./taskRoutes");

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

//middleware
router.use("/:id/notes", notesRoutes);
router.use("/:projectId/jobcards", jobCardRoutes);
router.use("/:projectId/tasks", taskRoutes);

module.exports = router;
