import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter/Counter';
import {store} from "reffects-store";

store.initialize({
    count: 0
})

ReactDOM.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>,
    document.getElementById('root')
);