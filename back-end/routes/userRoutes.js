const { Router } = require("express");
const userRouter = Router();
const {Task, User} = require("../models");

// GET all the users within the database [WORKING]
userRouter.get("/", async (req, res) => {
    const allUsers = await User.findAll();
    res.status(200).send({userName: allUsers});
})

// GET all associated with users

//

module.exports = userRouter;