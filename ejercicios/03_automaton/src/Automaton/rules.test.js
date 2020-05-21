import {rule30, rule90} from "./rules";

describe('Rules', function () {
    describe('Rule 90', function () {
        test.each([
            [[1, 1, 1], 0],
            [[1, 1, 0], 1],
            [[1, 0, 1], 0],
            [[1, 0, 0], 1],
            [[0, 1, 1], 1],
            [[0, 1, 0], 0],
            [[0, 0, 1], 1],
            [[0, 0, 0], 0],
        ])('for neighborhood %j is %i', (neighborhood, newCenterCell) => {
            expect(rule90(neighborhood)).toEqual(newCenterCell);
        });
    });

    describe('Rule 30', function () {
        test.each([
            [[1, 1, 1], 0],
            [[1, 1, 0], 0],
            [[1, 0, 1], 0],
            [[1, 0, 0], 1],
            [[0, 1, 1], 1],
            [[0, 1, 0], 1],
            [[0, 0, 1], 1],
            [[0, 0, 0], 0],
        ])('for neighborhood %j is %i', (neighborhood, newCenterCell) => {
            expect(rule30(neighborhood)).toEqual(newCenterCell);
        });
    })
});
