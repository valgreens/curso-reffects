import { registerInputEvents } from "./todos";
import { getEventHandler } from "reffects";
import { state } from "reffects-store";

describe("todos tests", () => {
  beforeEach(() => registerInputEvents());

  it("stores the text from input", () => {
    const inputChange = getEventHandler("inputChange");

    expect(inputChange({}, "hola mundo")).toEqual(
      state.set({
        inputText: "hola mundo",
      })
    );
  });

  it("creates a todo from input", () => {
    const createTodo = getEventHandler("createTodo");

    expect(
      createTodo({
        state: {
          inputText: "hola pepe",
          todos: [
            {
              id: 1,
              text: "hola mike",
              done: false,
            },
          ],
        }, uuid: 8,
      })
    ).toEqual(
      state.set({
        todos: [
          {
            id: 1,
            text: "hola mike",
            done: false,
          },
          {
            id: 8,
            text: "hola pepe",
            done: false,
          },
        ],
        inputText: "",
      })
    );
  });
});
