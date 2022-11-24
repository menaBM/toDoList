const { Model, DataTypes } = require('sequelize'),
    db = require('../db/db');

class Task extends Model{}

Task.init({
    id: {
        type: DataTypr.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    authorName: {
        type: DataType.STRING,
        allowNull: false
    },
    task: {
        type: DataType.STRING,
        allowNull: false
    },
    date: {
        type: DataType.STRING,
        defaultValue: "N/A"
    }
}, {
    sequelize: db,
    modelName: "Tas"
})



module.exports = Task