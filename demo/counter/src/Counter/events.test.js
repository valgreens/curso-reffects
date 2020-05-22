import {getEventHandler} from "reffects";
import registerCounterEvents from "./events";
import {state} from "reffects-store";
import {http} from "reffects-batteries";

describe('Counter events', () => {
    beforeAll(registerCounterEvents);
    test('increment the count from the state', () => {
        const increment = getEventHandler('increment');
        const initialCount = 0;
        const coeffects = { state: { count: initialCount } };

        const effects = increment(coeffects);

        expect(effects).toEqual(state.set({ count: 1 }));
    });

    test('notifies when the count gets to 10', () => {
        const increment = getEventHandler('increment');
        const initialCount = 9;
        const date = new Date(2020, 4, 22);
        const coeffects = { state: { count: initialCount }, time: date };

        const effects = increment(coeffects);

        expect(effects).toEqual({
            ...state.set({ count: 10 }),
            notify: { message: 'Hello world 22'}
        });
    });

    test('requests Tokyo time', () => {
        const requestTokyoTime = getEventHandler('requestTokyoTime');
        const givenCoeffects = {};
        const effects = requestTokyoTime(givenCoeffects);

        expect(effects).toEqual(http.get({
            url: 'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
            successEvent: ['showTokyoTime']
        }));
    });

    test('sets Tokyo time in state', () => {
        const showTokyoTime = getEventHandler('showTokyoTime');
        const givenCoeffects = {};

        const effects = showTokyoTime(givenCoeffects, [ { datetime: '2020-05-22T18:15:45.458358+09:00' }]);

        expect(effects).toEqual(state.set({ tokyoTime: '2020-05-22T18:15:45.458358+09:00'}));
    })
});