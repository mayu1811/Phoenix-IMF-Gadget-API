const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Equipment = sequelize.define("equipment", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("Available", "Deployed", "Destroyed", "Decommissioned"),
        allowNull: false
    },
    decommissioned_at: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: "equipments"
});

module.exports = Equipment;
