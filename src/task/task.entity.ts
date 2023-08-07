import { Timestamp } from 'rxjs';
import { TinyIntegerDataType } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Task extends Model {
  @Column({
   primaryKey: true,
   autoIncrement: true
  })
  id: number;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  status: string;

  @Column
  dueDate: Date;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}