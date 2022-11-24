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
    res.status(200).send(dateTasks);
})

// POST a new task [WORKING]
taskRouter.post("/new", async (req, res) => {
    await Task.create({
        authorName: req.body.authorName,
        task: req.body.task,
        date: req.body.date
    })
    res.sendStatus(200);
})

// DELETE a specific id [WORKING]
taskRouter.put("/delete/:id", async (req, res) => {
    const deleteTask = await Task.findByPk(req.params.id);
    await deleteTask.destroy()
    res.status(200).send("Deleted Successfully");
})

module.exports = taskRouter;