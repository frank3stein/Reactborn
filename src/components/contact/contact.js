import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import './styles.css';
import './custom.css';
import axios from 'axios';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
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
      <label htmlFor={props.id || props.name}>{label}</label>

      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// const MyCheckbox = ({ children, ...props }) => {
//   const [field, meta] = useField({ ...props, type: 'checkbox' });
//   return (
//     <>
//       <label className="checkbox">
//         <input {...field} {...props} type="checkbox" />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

// const MySelect = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input> and alse replace ErrorMessage entirely.
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
//       <StyledSelect {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <StyledErrorMessage>{meta.error}</StyledErrorMessage>
//       ) : null}
//     </>
//   );
// };

// And now we can use these
const ContactForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
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
          message: Yup.string().required('Required'),
          //   acceptedTerms: Yup.boolean()
          //     .required('Required')
          //     .oneOf([true], 'You must accept the terms and conditions.'),
          //   jobType: Yup.string()
          // specify the set of valid values for job type
          // @see http://bit.ly/yup-mixed-oneOf
          // .oneOf(
          //   ['designer', 'development', 'product', 'other'],
          //   'Invalid Job Type'
          // )
          // .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 400);
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
            .then(response => console.log('Axios back ', response))
            .catch(err => console.log(err));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Alican"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Kalav"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="alicankalav@gmail.com"
          />
          <MyTextArea
            label="Message"
            name="message"
            type="text"
            component="textarea"
            placeholder="Enter your message here and we will get back to you as soon as possible. Have a great day !"
          />
          {/* <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox> */}

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
