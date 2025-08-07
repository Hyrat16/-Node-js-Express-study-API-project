import { type Response, type Request, type NextFunction } from "express";
import { TaskService } from "../core/service/TaskService.js";
import { Task } from "../models/Task.model.js";

const taskServices = new TaskService();

export class TaskControllers {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const taskData: Task = req.body;
      const newTask = await taskServices.createTask(taskData);
      res.status(200).json({
        success: true,
        message: "Tarefa criada com sucesso!",
        data: newTask,
      });
    } catch (error: any) {
      console.log(
        "Erro ao criar tarefa. Passando para o errorHandler.",
        error.message
      );
      next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const allTasks = await taskServices.getAllTask();
      res.status(200).json({
        success: true,
        data: allTasks,
      });
    } catch (error: any) {
      console.log(
        "Erro ao encontrar e retornar todas tarefas. Passando para o errorHandler.",
        error.message
      );
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const taskID = await taskServices.getTaskById(id);
      res.status(200).json({
        success: true,
        dataId: taskID,
      });
    } catch (error: any) {
      console.log(
        "Erro ao encontrar e retornar tarefa expecifica. Passando para o errorHandler.",
        error.message
      );
      next(error);
    }
  }

  async uptade(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const uptadeTaskBody = req.body;
      const allTasks = await taskServices.getAllTask();
      const taskServiceUptade = await taskServices.updateTask(
        id,
        uptadeTaskBody
      );
      res.status(200).json({
        success: true,
        data: allTasks,
      });
    } catch (error: any) {
      console.log(
        "Erro ao encontrar e retornar tarefa expecifica para atualizar. Passando para o errorHandler.",
        error.message
      );
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const taskDeleteTaskID = await taskServices.deleteTask(id);
      res.status(200).json({
        sucess: true,
        dataDeleID: taskDeleteTaskID,
      });
    } catch (error: any) {
      res.status(204);
      console.log(
        "Erro ao encontrar e retornar tarefa expecifica e excluir. Passando para o errorHandler.",
        error.message
      );
      next(error);
    }
  }
}
