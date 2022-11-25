const { Model, DataTypes } = require('sequelize'),
    db = require('../db/db')

class User extends Model{}

User.init({
    userName: {
        type: DataTypes.STRING,
        allownull: false
    },
    
}, {
    sequelize: db,
    modelName: "User"
})


    
module.exports = User;