import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { taskProviders } from './task.provider';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [
    TaskService,
    ...taskProviders,
  ],
})
export class TaskModule {}