import React from 'react';
import {subscribe} from "reffects-store";

function TodoItem({ item }) {
    return (
        <div className={`item ${item.done ? 'done' : ''}`}>
            { item.text }
        </div>
    );
}

function TodoList({ todos }) {
    return (
        <div className="todos">
            {todos.map(item => <TodoItem key={item.id} item={item} /> )}
        </div>
    );
}

export default subscribe(
    TodoList,
    state => ({ todos: state.todos })
)