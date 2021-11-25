import React, {useRef} from "react";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";

import "./Checkout.scss";
import ActionButtons from "../../components/ActionButtons";
import { CheckoutSchema } from "../../utils/validation";
import CustomError from "../../components/CustomError";
import sendMail from "../../utils/sendMail";

const Checkout = () => {
  const history = useHistory();

  const form = useRef();

  const handleBackBtn = () => history.push("/catalog");
  const onSubmit = async (values) => {
    await sendMail(form.current, values.email);
    console.log('send!');
    history.push("/successOrder");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const inputs = [
    {
      placeholder: "First Name",
      name: "firstName",
    },
    {
      placeholder: "Last Name",
      name: "lastName",
    },
    {
      placeholder: "Email",
      name: "email",
    },
    {
      placeholder: "Phone number",
      name: "phone",
    },
    {
      placeholder: "Address",
      name: "address",
    },
  ];

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
        }}
        validateOnChange={true}
        validationSchema={CheckoutSchema}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form ref={form} className="checkout-form">
            <div className="checkout-form__content">
              {inputs.map((item) => (
                <div key={item.name}>
                  <label htmlFor={item.name}>{item.placeholder}</label>
                  <Field id={item.name} name={item.name} />
                  {errors[item.name] && touched[item.name] ? (
                    <CustomError error={errors[item.name]} />
                  ) : null}
                </div>
              ))}
            </div>
            <ActionButtons
              handleBackBtn={handleBackBtn}
              handleNextBtn={handleSubmit}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
