const { model, DataTypes } = require('sequelize'),
    db = require('../db/db')

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        //Makes it able to go from 1-2-3 etc
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataType.STRING,
        allownull: false
    },
    
}, {
    sequelize: db,
    modelName: "User"
})


    
module.exports = User;