function rule90(neighborhood) {
    const centralCellsByNeighborhood = {
        [JSON.stringify([1, 1, 1])]: 0,
        [JSON.stringify([1, 1, 0])]: 1,
        [JSON.stringify([1, 0, 1])]: 0,
        [JSON.stringify([1, 0, 0])]: 1,
        [JSON.stringify([0, 1, 1])]: 1,
        [JSON.stringify([0, 1, 0])]: 0,
        [JSON.stringify([0, 0, 1])]: 1,
        [JSON.stringify([0, 0, 0])]: 0,
    };
    return centralCellsByNeighborhood[JSON.stringify(neighborhood)];
}

function rule30(neighborhood) {
    const centralCellsByNeighborhood = {
        [JSON.stringify([1, 1, 1])]: 0,
        [JSON.stringify([1, 1, 0])]: 0,
        [JSON.stringify([1, 0, 1])]: 0,
        [JSON.stringify([1, 0, 0])]: 1,
        [JSON.stringify([0, 1, 1])]: 1,
        [JSON.stringify([0, 1, 0])]: 1,
        [JSON.stringify([0, 0, 1])]: 1,
        [JSON.stringify([0, 0, 0])]: 0,
    };
    return centralCellsByNeighborhood[JSON.stringify(neighborhood)];
}

const RULE_30 = "rule30";
const RULE_90 = "rule90";

export { rule30, rule90, RULE_30, RULE_90 };