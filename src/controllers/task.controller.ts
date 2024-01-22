import { AuthRequest } from "../middleware";
import { Request, Response } from "express";
import Task from "../models/task-model";

export const getAllTasks = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user;
        const tasks = await Task.find({ user: userId });
        res.send(tasks);
    } catch (error) {
        console.log("error in getAllTasks", error);
        res.send({ error: "Error while fetching task" });
        throw error;
    }
}