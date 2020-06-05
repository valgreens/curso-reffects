import { registerUuidCoeffect } from "./uuid";
import { getCoeffectHandler } from "reffects";

describe('uuid coeffect', () => {
  it('extracts uuid value', () => {
    const uuidFake = jest.fn();
    uuidFake.mockReturnValue(42);
    registerUuidCoeffect(uuidFake);

    const uuidHandler = getCoeffectHandler('uuid');
    
    expect(uuidHandler()).toEqual({
      uuid: 42
    });
  });
});
