import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "reffects-store";
import { v4 as uuid } from 'uuid';
import TodoList from "./Todos/TodoList";
import TodoInput from "./Todos/TodoInput";

store.initialize({
    todos: [
        {
            id: uuid(),
            text: 'Implement todos exercise',
            done: false
        }
    ]
});

ReactDOM.render(
    <React.StrictMode>
        <TodoInput />
        <TodoList />
    </React.StrictMode>,
    document.getElementById('root')
);