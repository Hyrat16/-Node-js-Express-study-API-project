import { taskRoutes } from "./task.routes.js";
import { Router } from "express";

const routes = Router();

routes.use("/tasks", taskRoutes);

export { routes };
