import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter/Counter';
import {registerStateBatteries, store} from "reffects-store";
import registerCounterEvents from "./Counter/events";
import registerNotifyEffect from "./effects/notification";
import registerTimeCoeffects from "./coeffects/time";
import {registerHttpBatteries} from "reffects-batteries";

store.initialize({
    count: 0,
    tokyoTime: 1
});

registerStateBatteries();
registerHttpBatteries({
    get({ url, successFn }) {
        fetch(url)
            .then(res => res.json())
            .then(response => successFn(response));
    }
});
registerNotifyEffect(alert);
registerTimeCoeffects({ now() { return new Date(); }});

registerCounterEvents();

ReactDOM.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>,
    document.getElementById('root')
);