import {registerCoeffectHandler} from "reffects";

export default function registerTimeCoeffects(timeProvider) {
    registerCoeffectHandler('time', function time() {
        return {
            time: timeProvider.now()
        };
    });
}