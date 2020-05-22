import {getCoeffectHandler} from "reffects";
import registerTimeCoeffects from "./time";

describe('Time', () => {
    test('gives the current date', () => {
        let date = new Date();
        registerTimeCoeffects({ now() { return date } });
        const time = getCoeffectHandler('time');
        const coeffect = time();

        expect(coeffect).toEqual({time: date});
    });
});