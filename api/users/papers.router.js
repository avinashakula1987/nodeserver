const {
  createPaper,
  getPapers,
  getPaperById,
  updatePaper,
  deletePaper,
  statusPaper,
} = require("./papers.controller");
const router = require("express").Router();

router.post("/", createPaper);

router.get("/", getPapers);
router.get("/:id", getPaperById);
router.patch("/", updatePaper);
router.patch("/status", statusPaper);
router.delete("/", deletePaper);
module.exports = router;
