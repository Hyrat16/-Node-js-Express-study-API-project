import { TaskRepository } from "../repositories/task.repository.js";
import { Task } from "../../models/Task.model.js";
import { Erro } from "../../../utils/apiError.js";
//import { errorHandler } from "../../../middlewares/errorHandler.js";

export class TaskService {
  async createTask(taskData: Task) {
    if (!taskData.title) {
      throw new Erro(400, "O título é obrigatório.");
    }
    return new TaskRepository().create(taskData);
  }

  async getAllTask() {
    return new TaskRepository().findAll();
  }

  async getTaskById(id: number) {
    const listTask = await new TaskRepository().findById(id);

    if (listTask == null) {
      throw new Erro(404, "Tarefa não encontrada.");
    }
    return listTask;
  }

  async updateTask(id: number, uptadeTask: Task) {
    const locateIdTask = await this.getTaskById(id);
    if (locateIdTask == null) {
      throw new Erro(404, "Tarefa não encontrada.");
    }

    return new TaskRepository().uptade(id, uptadeTask);
  }

  async deleteTask(id: number) {
    const locateIdTask = await this.getTaskById(id);
    if (locateIdTask == null) {
      throw new Erro(404, "Tarefa não encontrada.");
    }

    return new TaskRepository().delete(id);
  }
}
