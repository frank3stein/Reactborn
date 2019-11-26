import React, { useEffect, useState } from 'react';
import { Formik, Form, useFormikContext, useField } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import './contact.css';
import { load } from 'recaptcha-v3';
import axios from 'axios';
import { Notification } from './notification/notification';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className="error">{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>

      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className="error">{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const StyledErrorMessage = styled.div`
  font-size: 1rem;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;
const Recaptcha = () => {
  const { values } = useFormikContext();
  useEffect(() => {
    async function recaptcha() {
      const recaptcha = await load('6Lf53r8UAAAAAJxXtGRtNysTSsTfnc86ih_vHYXr', {
        autoHideBadge: true,
      });
      const token = await recaptcha.execute();
      values.recaptcha = token;
    }
    recaptcha();
  }, [values.recaptcha]);
  return null;
};
// // And now we can use these
const ContactForm = () => {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => setIsHidden(true), 3500);
    return () => {
      // console.log('Cleaning before rerender');
      clearTimeout(timeOut);
    };
  }, [isHidden]);
  return (
    <>
      <h1>Contact</h1>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            recaptcha: '',
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(2, 'Must be 2 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .min(2, 'Must be 2 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email addresss`')
              .required('Required'),
            message: Yup.string()
              .min(2)
              .required('Required'),
            recaptcha: Yup.string()
              .min(1)
              .required('ReCaptcha is required to send your request.'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // const payload = { ...values, recaptcha: token };
            // setValues(payload);
            // alert(JSON.stringify(values, null, 2));
            axios
              .post(
                'https://h3qmp33q4d.execute-api.eu-west-1.amazonaws.com/prod/contact',
                {
                  headers: {
                    //   'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                  },
                  body: values,
                }
              )
              .then(response => {
                // console.log('Axios back ', response);
                // alert(
                //   'We have received your message. We will get back to you as soon as possible.'
                // ); // this is inside notification component
                setIsHidden(false);
                resetForm();
              })
              .catch(err => console.log(err));
            setSubmitting(false);
          }}
        >
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="John"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="john.doe@gmail.com"
            />
            <MyTextArea
              label="Message"
              name="message"
              type="text"
              component="textarea"
              placeholder="Enter your message here and we will get back to you as soon as possible. Have a great day !"
            />
            <Recaptcha name="recaptcha" />
            <button
              type="submit"
              css={css`
                margin-top: 1rem;
              `}
            >
              Submit
            </button>
            <Notification isHidden={isHidden} setIsHidden={setIsHidden} />
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
