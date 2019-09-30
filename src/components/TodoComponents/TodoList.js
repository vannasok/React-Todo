import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <ul>
          <li>
            <Todo
              handleToggleComplete={props.handleToggleComplete}
              key={todo.id}
              todo={todo}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
