const { Router } = require("express");
const taskRouter = Router();
const {Task, User} = require("../models");

// GET all the tasks within the database [WORKING]
taskRouter.get("/", async (req, res) => {
    const allTasks = await Task.findAll();
    res.status(200).send({task: allTasks});
})

// GET all the tasks with a specific date [WORKING]
taskRouter.get("/allTasks/:date", async (req, res) => {
    const dateTasks = await Task.findAll({
        where: {date: req.params.date}
    })
    res.status(200).send({task: dateTasks});
})

// POST a new task [WORKING]
taskRouter.post("/new", async (req, res) => {
    await Task.create({
        authorName: req.body.authorName,
        task: req.body.task,
        date: req.body.date
    })
    if ( ! await User.findOne({where: {userName : req.body.authorName}})){
        await User.create({
            userName: req.body.authorName
        })
    }

    res.sendStatus(200);
})

// DELETE a specific id [WORKING]
taskRouter.put("/delete/:id", async (req, res) => {
    const deleteTask = await Task.findByPk(req.params.id);
    await deleteTask.destroy()
    res.status(200).send("Deleted Successfully");
})

taskRouter.get("/order", async (req, res) => {
    const orderDate = await Task.findAll({
        order: [['date', 'ASC']]
    })
    res.status(200).send({task: orderDate})
})

module.exports = taskRouter;