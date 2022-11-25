const { Router } = require("express");
const userRouter = Router();
const {Task, User} = require("../models");

// GET all the users within the database [WORKING]
userRouter.get("/", async (req, res) => {
    const allUsers = await User.findAll();
    res.status(200).send({userName: allUsers});
})

// GET all tasks associated with a user
userRouter.get("/:id/tasks", async (req, res) => {
    const findTasks = await Task.findAll({where: {UserId: req.params.id}})
    res.status(200).send({task: findTasks})
})

module.exports = userRouter;