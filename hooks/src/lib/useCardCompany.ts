import useInput, { InputState } from "./domains/useInput";
import validation, { Validator } from "./domains/validation";
import { makeOnBlur, makeOnChange } from "./domains/makeCallback";
import { useEffect } from "react";

const CARD_COMPANIES = ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"];

const validators: Validator[] = [
  {
    validate: (value) => CARD_COMPANIES.includes(value),
    errorMessage: "유효하지 않은 카드사입니다.",
  },
];
const useCardCompany = () => {
  const cardCompany: InputState = useInput("");

  useEffect(() => {
    validation(cardCompany, validators);
  }, [cardCompany.value, cardCompany.status]);
  const onChange = makeOnChange(cardCompany);
  const onBlur = makeOnBlur(cardCompany);

  return { state: cardCompany, onChange, onBlur };
};

export default useCardCompany;
