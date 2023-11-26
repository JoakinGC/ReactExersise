import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 400px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  align-self: center;
`;

const UserInfo = styled.div`
  text-align: center;
`;

const CustomID = ({ user }) => {
  const { name, email, image } = user;

  return (
    <Card>
      <Image src={image} alt="Profile" />
      <UserInfo>
        <h2>{`${name.first}`}</h2>
        <p>Apellido: {name.last}</p>
        <p>Email: {email}</p>
      </UserInfo>
    </Card>
  );
};

export default CustomID;
