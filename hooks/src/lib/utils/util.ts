import { InputState } from "../domains/useInput";

export const flatten = (inputStates: InputState[], key: keyof InputState) =>
  inputStates.map((inputState) => inputState[key]);
