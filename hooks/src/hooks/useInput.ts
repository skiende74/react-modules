import { useState } from "react";

export type InputState = ReturnType<typeof useInput>;
const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setError = (message: string) => {
    setErrorMessage(message);
    setIsError(true);
  };
  const resetError = () => {
    setErrorMessage("");
    setIsError(false);
  };

  return { value, isError, errorMessage, setValue, setError, resetError };
};

export default useInput;
