import { renderHook } from "@testing-library/react-hooks";
import useCardNumber from "./useCardNumber";

describe("useCardNumber 테스트", () => {
  test("하나의 입력", () => {
    const { result } = renderHook(useCardNumber);
    result.current.cardNumberStates[0].setValue("1a");
    expect(result.current.cardNumberStates[0].isError).toBe(false);
  });
});
