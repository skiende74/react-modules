import useInput, { InputState } from "./domains/useInput";
import validation, { Validator } from "./domains/validation";
import { makeOnBlur, makeOnChange } from "./domains/makeCallback";
import { useEffect } from "react";

const VALID_LENGTH = 4;
const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "숫자만 입력 가능합니다.",
  },
  {
    validate: (value) => value.length === VALID_LENGTH,
    errorMessage: `비밀번호는 ${VALID_LENGTH}여야합니다.`,
    type: "blur",
  },
];
const usePassword = () => {
  const password: InputState = useInput("");

  useEffect(() => {
    validation(password, validators);
  }, [password.value, password.status]);
  const onChange = makeOnChange(password);
  const onBlur = makeOnBlur(password);

  return { password, onChange, onBlur };
};

export default usePassword;
