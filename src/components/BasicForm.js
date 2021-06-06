import useInput from "../hooks/use-input";
const BasicForm = () => {
    const isNotEmpty = (value) => value.trim() !== "";
    const isEmail = (value) => value.includes("@");
    const {
        value: enteredfName,
        isValid: enteredfNameIsValid,
        hasError: fnameInputHasError,
        valueChangeHandler: fnameChangeHandler,
        inputBlurHandler: fnameBlurHandler,
        reset: resetfNameInput,
    } = useInput(isNotEmpty);
    const {
        value: enteredlName,
        isValid: enteredlNameIsValid,
        hasError: lnameInputHasError,
        valueChangeHandler: lnameChangeHandler,
        inputBlurHandler: lnameBlurHandler,
        reset: resetlNameInput,
    } = useInput(isNotEmpty);
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput(isEmail);
    let formIsValid = false;

    if (enteredfNameIsValid && enteredlNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }
    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(enteredfName);
        console.log(enteredlName);
        console.log(enteredEmail);

        resetfNameInput();
        resetlNameInput();
        resetEmailInput();
    };
    const fnameInputClasses = fnameInputHasError
        ? "form-control invalid"
        : "form-control";
    const lnameInputClasses = lnameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={fnameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        onChange={fnameChangeHandler}
                        onBlur={fnameBlurHandler}
                        value={enteredfName}
                    />
                    {fnameInputHasError && (
                        <p className="error-text">
                            First Name must not be empty.
                        </p>
                    )}
                </div>
                <div className={lnameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        onChange={lnameChangeHandler}
                        onBlur={lnameBlurHandler}
                        value={enteredlName}
                    />
                    {lnameInputHasError && (
                        <p className="error-text">
                            Last Name must not be empty.
                        </p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className="error-text">Please enter a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
