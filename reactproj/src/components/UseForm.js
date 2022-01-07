import React, { useEffect, useState } from "react";
import Validation from "./Validation";

const UseForm = (submitForm) => {
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // for handling form submit
        // it prevent the submit button
        setErrors(Validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);
    return { handleChange, handleFormSubmit, values, errors };
};

export default UseForm;
