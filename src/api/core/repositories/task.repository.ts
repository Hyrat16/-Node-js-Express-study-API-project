import { describe } from "node:test";
import { Task } from "../../models/Task.model.js";

const tasksDatabase: Task[] = [];
let currentId = 1;

export class TaskRepository {
  async create(taskData: Task) {
    // Definition of structuring and definition of each property when sending to the database
    const newTask = new Task({
      id: currentId++,
      title: taskData.title,
      description: taskData.description,
      completed: taskData.completed,
      createdAt: taskData.createdAt,
    });
    tasksDatabase.push(newTask);
    // Responsible for sending directly newTask to the tasksDatabase

    return newTask;
  }

  async delete(id: number) {
    const taskIndex = tasksDatabase.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return false;
    }
    tasksDatabase.splice(taskIndex, 1);
    return tasksDatabase;
  }

  async findAll() {
    return tasksDatabase;
  }

  findById(id: number) {
    const taskIndex = tasksDatabase.find((task) => task.id === id);

    if (!taskIndex) {
      return null;
    }
    return taskIndex;
  }

  async uptade(id: number, uptadeData: Task) {
    const taskIndex = tasksDatabase.find((task) => task.id === id);
    if (!taskIndex) {
      return null;
    } else {
      taskIndex.title = uptadeData.title;
      taskIndex.description = uptadeData.description;
      taskIndex.completed = uptadeData.completed;
    }

    return taskIndex;
  }
}
