import { computed, observable } from 'mobx';
import Todo from './Todo';

class TodoList {
  @observable todos: Array<Todo> = [];

  constructor(props) {
    this.todos = props.todos;
  }


  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

export default TodoList;
