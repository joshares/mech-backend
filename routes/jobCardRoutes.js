const express = require("express");
const {
  getJobCard,
  createJobCard,
  deleteJobCard,
} = require("../controllers/jobCardController");
// const restrictTo = require("../middleware/authUsers");
// const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router({ mergeParams: true });

router.route("/").get(getJobCard).post(createJobCard);
router.route("/:id").delete(deleteJobCard);

// router.route("/").post(validateToken, restrictTo("user"), createReview);

module.exports = router;
