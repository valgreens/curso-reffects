import {getEffectHandler} from "reffects";
import registerNotifyEffect from "./notification";

describe('Notification effect', () => {
    test('shows a notification', () => {
        const fn = jest.fn();
        registerNotifyEffect(fn)
        const notify = getEffectHandler('notify');
        notify({ message: 'Hello world' });

        expect(fn).toHaveBeenCalledWith('Hello world');
    });
});