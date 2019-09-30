import React from 'react';
// import styled from 'styled-components';

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type='text'
        name='todo'
        value={props.value}
        placeholder='what to do next...'
      />
      <button onClick={props.handleAddTodo}>Add To List</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
