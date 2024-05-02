import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import validations from "./domains/validations";
import { makeOnBlur, makeOnChange } from "./domains/makeCallback";
import { flatten } from "./utils/util";
import { useEffect } from "react";

const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "숫자만 입력 가능합니다.",
  },
  {
    validate: (value) => value.length === 4,
    errorMessage: "필드의 길이는 4여야합니다.",
    type: "blur",
  },
];
const useCardNumber = () => {
  const cardNumberStates: InputState[] = [useInput(""), useInput(""), useInput(""), useInput("")];

  useEffect(() => {
    validations(cardNumberStates, validators);
  }, [flatten(cardNumberStates, "value"), flatten(cardNumberStates, "status")]);
  const onChanges = cardNumberStates.map(makeOnChange);
  const onBlurs = cardNumberStates.map(makeOnBlur);
  return { cardNumberStates, onChanges, onBlurs };
};

export default useCardNumber;
