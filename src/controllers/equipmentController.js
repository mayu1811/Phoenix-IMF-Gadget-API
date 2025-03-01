const Equipment = require("../models/equipment");
const { Op } = require("sequelize");

// ✅ GET: Retrieve all gadgets with a random success probability
exports.getAllEquipments = async (req, res) => {
    try {
        const { status } = req.query;
        const condition = status ? { status } : {};

        const equipments = await Equipment.findAll({ where: condition });

        const result = equipments.map(eq => ({
            ...eq.dataValues,
            success_probability: `${Math.floor(Math.random() * 100) + 1}%`
        }));

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error fetching equipments", error });
    }
};

// ✅ POST: Add a new equipment
exports.addEquipment = async (req, res) => {
    try {
        const { name, status } = req.body;
        const newEquipment = await Equipment.create({ name, status });
        res.status(201).json(newEquipment);
    } catch (error) {
        res.status(500).json({ message: "Error adding equipment", error });
    }
};

// ✅ PATCH: Update existing equipment
exports.updateEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status } = req.body;

        await Equipment.update({ name, status }, { where: { id } });
        res.json({ message: "Equipment updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating equipment", error });
    }
};

// ✅ DELETE: Soft delete (Decommission equipment)
exports.deleteEquipment = async (req, res) => {
    try {
        const { id } = req.params;

        await Equipment.update(
            { status: "Decommissioned", decommissioned_at: new Date() },
            { where: { id } }
        );

        res.json({ message: "Equipment decommissioned successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error decommissioning equipment", error });
    }
};

// ✅ POST: Self-Destruct
exports.selfDestruct = async (req, res) => {
    try {
        const { id } = req.params;
        const confirmationCode = Math.floor(100000 + Math.random() * 900000); // 6-digit code

        await Equipment.update({ status: "Destroyed" }, { where: { id } });

        res.json({
            message: "Self-destruct sequence initiated!",
            confirmation_code: confirmationCode
        });
    } catch (error) {
        res.status(500).json({ message: "Error triggering self-destruct", error });
    }
};

