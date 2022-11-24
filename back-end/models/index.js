const Task = require('./taskList.model')
const User = require('./user.model')

Task.belongsTo(User);
User.hasMany(Task);

module.exports = { Task, User }