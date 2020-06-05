import { registerEventHandler, coeffect } from "reffects";
import { state } from "reffects-store";

export function registerInputEvents () {
  registerEventHandler('inputChange', (_, payload) => {
    return {
      'state.set': {inputText: payload}
    };
  }, []);

  registerEventHandler('createTodo', ({ state: { todos, inputText }, uuid}) => {
    return state.set({
      todos: [
        ...todos,
        {
          id: uuid,
          text: inputText,
          done: false
        }
      ],
      inputText: ''
    })
  }, [state.get({todos: 'todos', inputText: 'inputText'}), coeffect('uuid')]);
}