import {coeffect, registerEventHandler} from "reffects";
import {state} from "reffects-store";
import {http} from "reffects-batteries";

export default function registerCounterEvents() {
    registerEventHandler('increment', function increment({ state: { count }, time }) {
        const newCount = count + 1;
        if (newCount === 10) {
            return {
                notify: { message: `Hello world ${time.getDate()}` },
                ...state.set({ count: newCount})
            }
        }
        return state.set({ count: newCount});
    }, [state.get({ count: 'count' }), coeffect('time')]);

    registerEventHandler('requestTokyoTime', function requestTokyoTime() {
        return http.get({
            url: 'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
            successEvent: ['showTokyoTime']
        });
    });

    registerEventHandler('showTokyoTime', function showTokyoTime(_, [ response ]) {
        return state.set({ tokyoTime: response.datetime });
    });
}