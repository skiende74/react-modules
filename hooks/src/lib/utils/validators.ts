import { Validator } from "../domains/validation";

export const numberOnlyValidator: Validator = {
  validate: (value) => /^\d*$/.test(value),
  errorMessage: "숫자만 입력 가능합니다.",
};

export const makeLengthValidator = (length: number): Validator => ({
  validate: (value) => value.length === length,
  errorMessage: `필드의 길이는 ${length}여야합니다.`,
  type: "blur",
});

export const numericOnlyValidator: Validator = {
  validate: (value) => /^\d*$/.test(value),
  errorMessage: "숫자만 입력 가능합니다.",
};

export const monthValidator: Validator = {
  validate: (value) => Number(value) >= 1 && Number(value) <= 12,
  errorMessage: "월의 범위는 1~12여야 합니다.",
  index: [0],
};
