const quizzes = require("../data/quizzes");

exports.getQuizzesByCourse = (req, res) => {
  const courseId = req.params.courseId;

  if (!quizzes[courseId])
    return res.status(404).json({ error: "No quizzes for this course" });

  res.json(quizzes[courseId]);
};

exports.getQuiz = (req, res) => {
  const courseId = req.params.courseId;
  const quizId = parseInt(req.params.quizId);

  if (!quizzes[courseId])
    return res.status(404).json({ error: "Course quizzes not found" });

  const quiz = quizzes[courseId].find((q) => q.id === quizId);

  if (!quiz)
    return res.status(404).json({ error: "Quiz not found" });

  res.json(quiz);
};
