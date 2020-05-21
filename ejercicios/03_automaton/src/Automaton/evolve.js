function zeroPad(list) {
    return [0, ...list, 0];
}

function extractNeighborhoods(state) {
    const neighborhoods = [];
    const paddedState = zeroPad(state);
    for (let i = 0; i < paddedState.length - 2; i++) {
        neighborhoods.push([paddedState[i], paddedState[i + 1], paddedState[i + 2]])
    }
    return neighborhoods;
}

function nextState(rule, state) {
    return extractNeighborhoods(zeroPad(state)).map(neighbor => rule(neighbor));
}

export default function evolve(rule, states) {
    const lastState = states[states.length - 1];
    return [...states.map(zeroPad), nextState(rule, lastState)];
}