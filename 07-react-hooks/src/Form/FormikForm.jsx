import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import FormError from "./FormError";

const FormikForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "name must be at least 2 character")
            .max(50, "name can't be exceed more than 50 character")
            .required("name is required"),
        email: Yup.string().email("invalid email").required("email is required"),
        password: Yup.string()
            .min(6, "password must contain at least 6 character")
            .max(10, "password can't exceed more than 10 character")
            .required("password is required"),
    });

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("form data", values);
                    resetForm();
                }}
            >
                <Form>
                    <label htmlFor="name">name</label>
                    <Field name="name" type="text" />
                    <FormError name="name" />

                    <label htmlFor="email">email</label>
                    <Field name="email" type="email" />
                    <FormError name="email" />

                    <label htmlFor="password">password</label>
                    <Field name="password" type="password" />
                    <FormError name="password" />

                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default FormikForm;