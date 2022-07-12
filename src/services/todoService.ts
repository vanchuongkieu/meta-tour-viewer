import httpOption from '@/utils/httpOption';
import {TodoDto} from './dtos/TodoDto';

const todoService = {
  async getAll() {
    const response = await httpOption.get<TodoDto[]>('todos?_limit=5');
    return response.data;
  },
};

export default todoService;
