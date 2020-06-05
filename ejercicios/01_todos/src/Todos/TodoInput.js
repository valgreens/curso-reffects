import React from 'react';
import { dispatch } from 'reffects';
import { subscribe } from 'reffects-store';

function TodoInput({ inputText, inputChange, createTodo }) {
    return (
        <form onSubmit={createTodo}>
            <input type="text" placeholder="Things I have to do..." value={inputText} onChange={inputChange} />
        </form>
    );
}


export default subscribe(
    TodoInput,
    state => ({ inputText: state.inputText }),
    {
        inputChange: (event) => dispatch({id: 'inputChange', payload: event.target.value}),
        createTodo: (event) => {
            event.preventDefault();
            dispatch('createTodo')
        }
    }
)