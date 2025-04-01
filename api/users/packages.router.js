const {
  createPackage,
  getPackages,
  getPackageById,
  updatePackage,
  deletePackage,
} = require("./packages.controller");
const router = require("express").Router();

router.post("/", createPackage);

router.get("/", getPackages);
router.get("/:id", getPackageById);
router.patch("/", updatePackage);
router.delete("/", deletePackage);
module.exports = router;
