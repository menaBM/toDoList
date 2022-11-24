const { Model, DataTypes } = require('sequelize'),
    db = require('../db/db');

class Task extends Model{}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    authorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    task: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        defaultValue: "Not Applicable"
    }
}, {
    sequelize: db,
    modelName: "Task"
})



module.exports = Task