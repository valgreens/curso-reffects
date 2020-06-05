import { registerCoeffectHandler } from "reffects";
// import { v4 as uuid } from 'uuid';

export function registerUuidCoeffect(uuidFn) {
  registerCoeffectHandler('uuid', () => {
    return {
      'uuid': uuidFn()
    };
  });
};
