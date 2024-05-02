import { ChangeEvent } from "react";
import useInput, { InputState } from "./useInput";
import { Validator } from "./useValidation";
import useValidations from "./useValidations";

const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "Please enter numbers only",
  },
];
const useCardNumber = () => {
  const cardNumberStates: InputState[] = [useInput(""), useInput(""), useInput(""), useInput("")];

  useValidations(cardNumberStates, validators);

  const makeOnChange = (setValue: InputState["setValue"]) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 4) return;
    setValue(value);
  };

  const onChanges = cardNumberStates.map(({ setValue }) => makeOnChange(setValue));

  return { cardNumberStates, onChanges };
};

export default useCardNumber;
