import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/contact/contact';
// const submitForm = event => {
//   event.preventDefault();
//   console.log(event);
// };

// const Contact = () => {
//   return (
//     <Layout>
//       <h2>Contact</h2>
//       <p>
//         <a href="mailto:">myemail@gmail.com</a>
//       </p>
//       <p>
//         <a href="https://www.instagram.com/waterbornbali">Instagram</a>
//       </p>
//       <p>Full address</p>
//       <form
//         action="/"
//         method="post"
//         css={css`
//           display: flex;
//           flex-direction: column;
//         `}
//       >
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" placeholder="Your name" />
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" placeholder="myemail@mail.com" />
//         <label htmlFor="message">Your message:</label>
//         <textarea
//           type="text"
//           id="message"
//           placeholder="Enter your message here. We will get back to you as soon as possible."
//         />
//         <button onClick={submitForm}>Submit</button>
//       </form>
//     </Layout>
//   );
// };

const Contact = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
