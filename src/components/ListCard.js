import React from 'react';
import styled, { css } from 'styled-components';
import { FaRegHandshake, FaTools } from 'react-icons/fa';

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  max-width: 300px;
  transition: transform 0.2s;

  ${(props) =>
    props.type === 'referral' &&
    css`
      border-left: 5px solid #667eea;
      background-color: #e8f0fe;
    `}
  
  ${(props) =>
    props.type === 'service' &&
    css`
      border-left: 5px solid #764ba2;
      background-color: #f3e8ff;
    `}

  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  color: ${(props) => (props.type === 'referral' ? '#667eea' : '#764ba2')};
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

const ListCard = ({ title, description, type }) => (
  <Card type={type}>
    <Icon type={type}>
      {type === 'referral' ? <FaRegHandshake /> : <FaTools />}
    </Icon>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

export default ListCard;
