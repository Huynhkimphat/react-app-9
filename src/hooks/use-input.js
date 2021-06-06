import { useState } from "react";

const useInput = (validateValue) => {
    const [enterValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enterValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };
    const reset = () => {
        setIsTouched(false);
        setEnteredValue("");
    };
    return {
        value: enterValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};
export default useInput;
