const Equipment = require("../models/equipment");

const generateRandomCodename = () => {
    const codenames = ["The Nightingale", "The Kraken", "Phantom", "Shadow"];
    return codenames[Math.floor(Math.random() * codenames.length)];
};

const generateMissionProbability = () => Math.floor(Math.random() * 101) + "% success probability";

module.exports = {
    getAllEquipments: async (status) => {
        const whereClause = status ? { status } : {};
        const equipments = await Equipment.findAll({ where: whereClause });
        return equipments.map(eq => ({
            ...eq.dataValues,
            missionSuccessProbability: generateMissionProbability()
        }));
    },

    createEquipment: async () => {
        return await Equipment.create({ name: generateRandomCodename() });
    },

    updateEquipment: async (id, data) => {
        await Equipment.update(data, { where: { id } });
        return await Equipment.findByPk(id);
    },

    decommissionEquipment: async (id) => {
        await Equipment.update(
            { status: "Decommissioned", decommissioned_at: new Date() },
            { where: { id } }
        );
        return { message: "Equipment decommissioned successfully" };
    },

    selfDestructEquipment: async (id) => {
        const confirmationCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        await Equipment.update({ status: "Destroyed" }, { where: { id } });
        return { message: "Self-destruct triggered!", confirmationCode };
    }
};
