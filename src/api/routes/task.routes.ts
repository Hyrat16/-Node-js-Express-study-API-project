import { Router } from "express";
import { TaskControllers } from "../controllers/task.controller.js";

export const taskRoutes = Router();

const controllers = new TaskControllers();

taskRoutes.post("/", controllers.create);
taskRoutes.get("/", controllers.findAll);
taskRoutes.get("/:id", controllers.findById);
taskRoutes.put("/:id", controllers.uptade);
taskRoutes.delete("/:id", controllers.delete);
