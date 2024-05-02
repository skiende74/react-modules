import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import validations from "./domains/validations";
import { makeOnBlur, makeOnChange } from "./domains/makeCallback";
import { flatten } from "./utils/util";
import { useEffect } from "react";
import { makeLengthValidator } from "./utils/validators";

const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "숫자만 입력 가능합니다.",
  },
  makeLengthValidator(4),
];
const useCardNumber = () => {
  const cardNumberStates: InputState[] = [useInput(""), useInput(""), useInput(""), useInput("")];

  const { states, onChanges, onBlurs } = useInputs(cardNumberStates);
  return { states: states, onChanges, onBlurs };
};



export default useCardNumber;
