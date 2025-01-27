import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import iziToast from "izitoast";
import "../../../node_modules/izitoast/dist/css/iziToast.css";

export default function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const messageFieldId = useId();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Min. 3 characters")
      .max(20, "Max. 20 characters")
      .required("Required"),
    email: Yup.string().email("Must be a valid email").required("Required"),
    message: Yup.string()
      .min(10, "Min. 10 characters")
      .max(400, "Max. 400 characters")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    iziToast.success({
      message: "Message sent",
      position: "topRight",
    });
    actions.resetForm();
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              id={nameFieldId}
              name="name"
              type="text"
              className={css.input}
            />
            <ErrorMessage name="name" component="p" className={css.error} />
            <label htmlFor={emailFieldId}>Email</label>
            <Field
              id={emailFieldId}
              name="email"
              type="email"
              className={css.input}
            />
            <ErrorMessage name="email" component="p" className={css.error} />
            <label htmlFor={messageFieldId}>Message</label>
            <Field
              id={messageFieldId}
              name="message"
              as="textarea"
              className={css.textarea}
              rows="5"
            />
            <ErrorMessage name="message" component="p" className={css.error} />
            <button
              disabled={!values.name || !values.email || !values.message}
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
