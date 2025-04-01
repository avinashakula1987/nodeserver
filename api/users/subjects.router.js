const { createSubject, getSubjects, getSubjectById, updateSubject, deleteSubject } = require("./subjects.controller");
const router = require("express").Router();

router.post("/", createSubject);

router.get("/", getSubjects);
router.get("/:id", getSubjectById);
router.patch("/", updateSubject);
router.delete("/", deleteSubject)
module.exports = router;