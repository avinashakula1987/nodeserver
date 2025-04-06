const {
  createPaper,
  getPaperById,
  getPapers,
  updatePaper,
  deletePaper,
  statusPaper,
} = require("./papers.service");
module.exports = {
  createPaper: (req, res) => {
    const body = req.body;
    console.log("body createPaper", body);

    createPaper(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error" + err,
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getPaperById: (req, res) => {
    const id = req.params.id;
    getPaperById(id, (err, results) => {
      if (err) {
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Records not found",
        });
      }
      if (results) {
        return res.json({
          success: 1,
          message: results,
        });
      }
    });
  },
  getPapers: (req, res) => {
    getPapers((err, results) => {
      if (err) {
        console.log("error", err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updatePaper: (req, res) => {
    const body = req.body;
    updatePaper(body, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  deletePaper: (req, res) => {
    const data = req.body;
    deletePaper(data, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Paper Deleted",
      });
    });
  },

  statusPaper: (req, res) => {
    const data = req.body;
    statusPaper(data, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Paper Status Changed",
      });
    });
  },
};
