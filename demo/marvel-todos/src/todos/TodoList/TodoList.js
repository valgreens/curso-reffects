import React from 'react';
import { subscribe } from 'reffects-store';
import TodoItem from './TodoItem';

export function TodoList({ todos }) {
  return (
    <React.Fragment>
      <ul>
        {todos ? (
          todos.map(function(todo) {
            return (
              <li key={todo.id} className={`${todo.done ? 'done' : 'undone'}`}>
                <TodoItem id={todo.id} text={todo.text} isDone={todo.done} />
              </li>
            );
          })
        ) : (
          <p> No todos </p>
        )}
      </ul>
      <section>
        <button>
          All
        </button>
        <button>
          Done
        </button>
        <button>
          Undone
        </button>
      </section>
    </React.Fragment>
  );
}

export default subscribe(
  TodoList, 
  function(state) {
    return {
      todos: state.todos
    };
  }
);
