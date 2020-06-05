import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store, registerStateBatteries} from "reffects-store";
import { v4 as uuid } from 'uuid';
import TodoList from "./Todos/TodoList";
import TodoInput from "./Todos/TodoInput";
import { registerInputEvents } from './events/todos';
import { registerUuidCoeffect } from './coeffects/uuid';

store.initialize({
    todos: [
        {
            id: uuid(),
            text: 'Implement todos exercise',
            done: false
        }
    ],
    inputText: ''
});

registerStateBatteries();
registerUuidCoeffect(uuid);

registerInputEvents();

ReactDOM.render(
    <React.StrictMode>
        <TodoInput />
        <TodoList />
    </React.StrictMode>,
    document.getElementById('root')
);