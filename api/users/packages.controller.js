const {
  createPackage,
  getPackageById,
  getPackages,
  updatePackage,
  deletePackage,
} = require("./packages.service");
module.exports = {
  createPackage: (req, res) => {
    const body = req.body;
    createPackage(body, (err, results) => {
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
  getPackageById: (req, res) => {
    const id = req.params.id;
    getPackageById(id, (err, results) => {
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
  getPackages: (req, res) => {
    getPackages((err, results) => {
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
  updatePackage: (req, res) => {
    const body = req.body;
    updatePackage(body, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  deletePackage: (req, res) => {
    const data = req.body;
    deletePackage(data, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Package Deleted",
      });
    });
  },
};
