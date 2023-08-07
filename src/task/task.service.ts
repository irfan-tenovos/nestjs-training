import { Injectable, Inject } from '@nestjs/common';
//import { CreateTaskDto } from './dto/create-cat.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: typeof Task
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.findAll<Task>();
  }

  async getTaskById(taskId){
    return this.taskRepository.findOne({
        where: {
            id: taskId,
        },
      });
  }

  async createTask(data){
    console.log(data);
    return this.taskRepository.create(data);
  }
  async deleteTask(taskId){
    console.log(taskId);
    return this.taskRepository.destroy({ where: { id: taskId } });
  }
}