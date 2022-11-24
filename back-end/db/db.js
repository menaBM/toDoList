const Sequelize = require('sequelize'),
    path = require('path'),

    
    db = new Sequelize({
        dialect: 'sqlite',
        storage: path.join(__dirname, 'toDoList.sqlite'),
        logging: false
    });

module.exports = db