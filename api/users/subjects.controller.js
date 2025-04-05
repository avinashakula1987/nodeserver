const {
  createSubject,
  getSubjectById,
  getSubjects,
  updateSubject,
  deleteSubject,
  updateSubjectStatus,
} = require("./subjects.service");
module.exports = {
  createSubject: (req, res) => {
    const body = req.body;
    createSubject(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getSubjectById: (req, res) => {
    const id = req.params.id;
    getSubjectById(id, (err, results) => {
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
  getSubjects: (req, res) => {
    getSubjects((err, results) => {
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
  updateSubject: (req, res) => {
    const body = req.body;
    updateSubject(body, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  updateSubjectStatus: (req, res) => {
    const body = req.body;
    updateSubjectStatus(body, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  deleteSubject: (req, res) => {
    const data = req.body;
    deleteSubject(data, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Subject Deleted",
      });
    });
  },
};
