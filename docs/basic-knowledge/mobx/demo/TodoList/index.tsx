import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoList from './TodoList';
import TodoView from './TodoView';
import Todo from './Todo';
import { autorun } from 'mobx';

interface TodoListViewProps {
  todoList: TodoList;
}

@observer
class TodoListView extends Component<TodoListViewProps> {

  componentDidMount() {
    autorun(() => {
      const { todoList } = this.props;
      console.log("Tasks left: " + todoList.unfinishedTodoCount);
    })
  }

  render() {

    const { todoList } = this.props;

    return (
      <div>
        <ul>
          {todoList.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {todoList.unfinishedTodoCount}
      </div>
    );
  }
}

const todoList = new TodoList({
  todos: [
    new Todo({ title: '待办事项1' }),
    new Todo({ title: '待办事项2' }),
    new Todo({ title: '待办事项3' }),
  ]
})

export default () => <TodoListView todoList={todoList} />;
