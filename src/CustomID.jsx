import React from 'react';
import { css } from '@emotion/css';

const cardStyles = css`
  width: 400px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const imageStyles = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  align-self: center;
`;

const userInfoStyles = css`
  text-align: center;
`;

const CustomID = ({ user }) => {
  const { name, email, image } = user;

  return (
    <div className={cardStyles}>
      <img className={imageStyles} src={image} alt="Profile" />
      <div className={userInfoStyles}>
        <h2>{`${name.first}`}</h2>
        <p>Apellido: {name.last}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default CustomID;
