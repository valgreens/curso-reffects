import React from 'react';
import {subscribe} from "reffects-store";
import {dispatch} from "reffects";

function Counter({ count, increment, tokyoTime }) {
    return (
        <>
            <p onClick={increment}>{ count }</p>
            <p>{ tokyoTime }</p>
        </>
    );
}

export default subscribe(
    Counter,
    state => ({ count: state.count, tokyoTime: state.tokyoTime }),
    {
        increment() {
            dispatch('increment');
        }
    }
);
