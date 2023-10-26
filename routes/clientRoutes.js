const express = require("express");
const notesRoutes = require("./noteRoutes");
const jobCardRoutes = require("./jobCardRoutes");
const {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

const router = express.Router();

router.route("/").get(getClients).post(createClient);

router.route("/:id").get(getClient).put(updateClient).delete(deleteClient);

router.use("/:id/notes", notesRoutes);
router.use("/:clientId/jobcards", jobCardRoutes);

module.exports = router;
