import { useEffect } from "react";
import { InputState } from "./useInput";

export interface Validator {
  validate: (value: string) => boolean;
  errorMessage: string;
}
const useValidation = (inputState: InputState, validators: Validator[]) => {
  useEffect(() => {
    const invalidValidators = validators.filter(({ validate }) => !validate(inputState.value));
    if (invalidValidators.length > 0) {
      inputState.setError(invalidValidators[0].errorMessage);
    }
  }, [inputState]);
};

export default useValidation;
