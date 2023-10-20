const express = require("express");
const { getNotes, createNotes } = require("../controllers/noteController");
// const restrictTo = require("../middleware/authUsers");
// const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router({ mergeParams: true });

router.route("/").get(getNotes).post(createNotes);

// router.route("/").post(validateToken, restrictTo("user"), createReview);

module.exports = router;
