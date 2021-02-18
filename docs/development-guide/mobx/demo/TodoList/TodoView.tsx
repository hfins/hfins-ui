import React from 'react';
import Todo from './Todo';
import { observer } from 'mobx-react';

interface TodoViewProps {
  todo: Todo;
  key?: any;
}

const TodoView: React.FC<TodoViewProps> = ({ todo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onChange={e => { todo.finished = e.target.checked }}
      />
      {todo.title}
    </li>
  )
}

export default observer<React.FC<TodoViewProps>>(TodoView);
