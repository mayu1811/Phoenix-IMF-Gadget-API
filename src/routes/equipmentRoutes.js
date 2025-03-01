const express = require("express");
const { getAllEquipments, addEquipment, updateEquipment, deleteEquipment, selfDestruct } = require("../controllers/equipmentController");

const router = express.Router();

router.get("/", getAllEquipments);
router.post("/", addEquipment);
router.patch("/:id", updateEquipment);
router.delete("/:id", deleteEquipment);
router.post("/:id/self-destruct", selfDestruct);

module.exports = router;
