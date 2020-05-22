import {registerEffectHandler} from "reffects";

export default function registerNotifyEffect(notifyFn) {
    registerEffectHandler('notify', function notify(payload) {
        notifyFn(payload.message);
    });
}