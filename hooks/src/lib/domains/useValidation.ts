import { useEffect } from "react";
import validations from "./validations";
import { flatten } from "../utils/util";
import { makeOnBlur, makeOnChange } from "./makeCallback";
import { InputState } from "./useInput";
import { Validator } from "./validation";

const useValidation = (states: InputState[], validators: Validator[]) => {
  useEffect(() => {
    validations(states, validators);
  }, [flatten(states, "value"), flatten(states, "status")]);

  const onChanges = states.map(makeOnChange);
  const onBlurs = states.map(makeOnBlur);
  return { states, onChanges, onBlurs };
};

export default useValidation;
