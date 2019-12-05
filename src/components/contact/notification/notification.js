import React from 'react';
import { css, keyframes } from '@emotion/core';

export const Notification = ({ isHidden, setIsHidden }) => {
  // const [name, setName] = useState(() => {
  //   const { values } = context();
  //   return values.firstName;
  // });
  // const animatetop = keyframes`
  //           from {
  //             top: -300px;
  //             opacity: 0;
  //           }
  //           to {
  //             top: 0;
  //             opacity: 1;
  //           }
  // `;
  const handleClick = e => {
    setIsHidden(() => !isHidden);
  };
  return (
    <main
      css={css`
        display: flex;
        visibility: ${isHidden ? 'hidden' : 'visible'};
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* overflow: auto; */
        /* background-color: rgb(0, 0, 0); */
        background-color: rgb(0, 0, 0, 0.4);
      `}
    >
      <section
        css={css`
          /* position: absolute; */
          /* margin: auto; */
          background-color: #fefefe;
          /* margin: calc(50% - 2rem) auto; */
          padding: 1rem;
          width: 80%;
          /* animation: ${animatetop} 0.4s; */
        `}
      >
        <span
          css={css`
            color: #aaa;
            float: right;
            font-size: 2rem;
            font-weight: bold;
            &:hover,
            &:focus {
              color: black;
              text-decoration: none;
              cursor: pointer;
            }
          `}
          onClick={handleClick}
        >
          &times;
        </span>
        <p
          css={css`
            text-align: center;
          `}
        >
          We have received your message. We will get back to you as soon as
          possible.
        </p>
      </section>
    </main>
  );
};
