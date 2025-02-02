import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  // @Post()
  // createTodos(@Body() todo: Todo) {
  //   return this.todosDbService.saveTodo(todo);
  // }
}
