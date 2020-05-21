import { store, registerStateBatteries } from 'reffects-store';
import {
  registerHttpBatteries,
  registerGlobalBatteries,
} from 'reffects-batteries';
import httpClient from './infrastructure/httpClient';
import registerTodoListEvents from './todos/TodoList/events';

export function startApp() {
  window.apiUrl =
    'https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';

  const initialState = {
    todos: [],
  };

  store.initialize(initialState);

  registerHttpBatteries(httpClient);
  registerGlobalBatteries();
  registerStateBatteries();

  registerTodoListEvents();
}
