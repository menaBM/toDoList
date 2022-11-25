const { Task, User } = require('../models/index'),
    db = require('./db')

async function seed(){
    await db.sync({
        force: true
    });
    //Create Users
    await User.bulkCreate([
        {
            userName: "Busoye"
        },
        {
            userName: "Ihsan"
        },
        {
            userName: "Mena"
        },
        {
            userName: "Michael"
        }
    ], {validate: true});
    //Create Tasks
    await Task.bulkCreate([
        {
            authorName: "Busoye",
            task: "Go to the gym",
            date: "2023-07-09"
        },
        {
            authorName: "Ihsan",
            task: "Make purple cake"
        },
        {
            authorName: "Mena",
            task: "Go ice skating with family"
        },
        {
            authorName: "Michael",
            task: "Turn on camera",
            date: "2022-11-25"
        }
    ], {validate: true})
}

module.exports = seed;