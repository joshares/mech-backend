const express = require("express");
const notesRoutes = require("./noteRoutes");
const taskRoutes = require("./taskRoutes");

const {
  getTeam,
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");

const router = express.Router();

router.route("/").get(getTeams).post(createTeam);

router.route("/:id").get(getTeam).put(updateTeam).delete(deleteTeam);

router.use("/:id/notes", notesRoutes);

router.use("/:teamId/tasks", taskRoutes);

module.exports = router;
