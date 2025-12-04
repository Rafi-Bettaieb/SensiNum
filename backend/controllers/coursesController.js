const courses = require("../data/courses");
const quizzes = require("../data/quizzes");

exports.getCourses = (req, res) => {
  res.json(courses);
};

exports.getCourseById = (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) return res.status(404).json({ error: "Course not found" });

  res.json({
    ...course,
    quizzes: quizzes[id] || []
  });
};
