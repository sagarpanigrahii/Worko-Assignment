import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
`;

const Header = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const SubHeader = styled.h2`
  color: #666;
  margin-bottom: 40px;
`;

const LoginLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #667eea;
  color: #fff;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  &:hover {
    background-color: #764ba2;
  }
`;

const Index = () => (
  <Container>
    <Header>Welcome to Worko</Header>
    <SubHeader>Your one-stop solution for referrals and services</SubHeader>
    <Search onSearch={(query) => console.log(query)} />
    <LoginLink to="/login">Login</LoginLink>
  </Container>
);

export default Index;
