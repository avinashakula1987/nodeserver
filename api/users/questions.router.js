const { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion } = require("./questions.controller");
const router = require("express").Router();

router.post("/", createQuestion);

router.get("/", getQuestions);
router.get("/:id", getQuestionById);
router.patch("/", updateQuestion);
router.delete("/", deleteQuestion)
module.exports = router;