import React from 'react';
import {subscribe} from "reffects-store";

function Counter({ count }) {
    return (
        <p>{ count }</p>
    );
}

export default subscribe(
    Counter,
    state => ({ count: state.count })
);
