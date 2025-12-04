const express = require("express");
const router = express.Router();
const controller = require("../controllers/quizzesController");

router.get("/:courseId", controller.getQuizzesByCourse);
router.get("/:courseId/:quizId", controller.getQuiz);

module.exports = router;
