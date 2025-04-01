const {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} = require("../users/user.service");
const { genSaltSync, hashSync } = require("bcrypt");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10);
    // body.password = hashSync(body.password, salt);
    createUser(body, (err, results) => {
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
  getUserById: (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
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
  getUsers: (req, res) => {
    console.log("GET /api/users called");

    getUsers((err, results) => {
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
  updateUser: (req, res) => {
    const body = req.body;
    updateUser(body, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        return;
      }

      return res.json({
        success: 1,
        message: "User Deleted",
      });
    });
  },
};
