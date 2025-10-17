import React from "react";

import { ErrorMessage } from "formik";

const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
        />
    );
};

export default FormError;