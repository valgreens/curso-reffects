import evolve from "./evolve";
import {rule30} from "./rules";

describe('Evolving state from rule', () => {
    test('rule30', () => {
       expect(evolve(rule30, [[1]])).toEqual(
           [
               [0, 1, 0],
               [1, 1, 1]
           ]
       );
       expect(evolve(rule30, [[1], [1, 1, 1]])).toEqual(
           [
               [0, 1, 0],
               [0, 1, 1, 1, 0],
               [1, 1, 0, 0, 1]
           ]
       );
    });
});