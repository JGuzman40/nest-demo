import { Injectable, Inject } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(
    private todosRepository: TodosRepository,
    @Inject('ACCESS_TOKEN') private accessToken: string,
  ) {}
  getTodos() {
    return this.accessToken === 'Esta es mi clave secreta'
      ? this.todosRepository.getTodo()
      : 'No tiene acceso a esta información';
  }
}
