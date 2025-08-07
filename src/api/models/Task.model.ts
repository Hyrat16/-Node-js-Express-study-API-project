export interface TaskData {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export class Task {
  public id: number;
  public title: string;
  public description: string;
  public completed: boolean;
  public createdAt: Date;

  constructor(data: TaskData) {
    this.id = data.id || 0;
    this.title = data.title;
    this.description = data.description;
    this.completed = data.completed;
    this.createdAt = data.createdAt;
  }
}
/* 
Page responsible for creating the model that will be used throughout the project to access the files
 */
