import { InputState } from "./useInput";
import useValidation from "./useValidation";

export interface Validator {
  validate: (value: string) => boolean;
  errorMessage: string;
  index?: number[];
}
const useValidations = (inputStates: InputState[], validators: Validator[]) => {
  for (let i = 0; i < inputStates.length; i++) {
    const filtered = validators.filter(({ index }) => (index !== undefined ? index.includes(i) : true));
    useValidation(inputStates[i], filtered);
  }
};

export default useValidations;
