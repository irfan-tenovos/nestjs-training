import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './create-task.dto';

@Controller('task')
export class TaskController {
    // Injected
    constructor(readonly taskService: TaskService) {}
    @Get()
    getTasks(): any {
        return this.taskService.getAllTasks();
    }

    @Get(':taskId')
    getTaskById(@Param('taskId') taskId: number): any {
        return this.taskService.getTaskById(taskId);
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        //return createTaskDto;
        return this.taskService.createTask(createTaskDto);
    }
    @Delete(':taskId')
    delete(@Param('taskId') taskId: number): any {
        console.log('there')
        return this.taskService.deleteTask(taskId);
    }
}
