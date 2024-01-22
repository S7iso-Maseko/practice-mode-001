import express from "express";
import { authenticationMiddleware } from "../middleware";

import { 
    createTask, 
    deleteTask, 
    editTask, 
    getAllCompletedTasks, 
    getAllTasks, 
    getAllTasksByCategory, 
    getTasksForToday, 
    toggleTaskStatus 
} from "../controllers/task.controller";

const taskRoutes = express.Router();

taskRoutes.use(authenticationMiddleware);

taskRoutes.route("/").get(getAllTasks);
taskRoutes.route("/completed").get(getAllCompletedTasks);
taskRoutes.route("/today").get(getTasksForToday);
taskRoutes.route("/tasks-by-categories/:id").get(getAllTasksByCategory);
taskRoutes.route("/create").post(createTask);
taskRoutes.route("/update/:id").put(toggleTaskStatus);
taskRoutes.route("/edit/:id").put(editTask);
taskRoutes.route("/:id").delete(deleteTask);


export default taskRoutes;
