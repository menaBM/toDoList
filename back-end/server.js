const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const taskRouter = require("./routes/taskListRoutes");
const seed = require("./db/seed");
const userRouter = require("./routes/userRoutes");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/task", taskRouter);
app.use("/user", userRouter);

app.listen(6000, async () => {
    await seed();
    console.log("Listening on port 6000");
});