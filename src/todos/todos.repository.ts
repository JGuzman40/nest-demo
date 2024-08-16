import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosRepository {
  private todos = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      isCompleteed: false,
    },
    {
      id: 12,
      title: 'Todo 2',
      description: 'Description 2',
      isCompleteed: false,
    },
  ];
  async getTodo() {
    return this.todos;
  }
}
