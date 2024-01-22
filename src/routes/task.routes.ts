import express from "express";
import { getAllTasks } from "../controllers/task.controller";
import { authenticationMiddleware } from "../middleware";

const taskRoutes = express.Router();

taskRoutes.use(authenticationMiddleware);
taskRoutes.route("/").get(getAllTasks);


export default taskRoutes;

