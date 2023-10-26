const express = require("express");
const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
// const restrictTo = require("../middleware/authUsers");
// const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router({ mergeParams: true });

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

// router.route("/").post(validateToken, restrictTo("user"), createReview);

module.exports = router;
