import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import Search from '../components/Search';
import ListCard from '../components/ListCard';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #667eea;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #764ba2;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Section = styled.div`
  margin-bottom: 40px;
  width: 100%;
  text-align: center;

  h3 {
    margin-bottom: 20px;
    color: ${(props) => (props.type === 'referral' ? '#667eea' : '#764ba2')};
  }
`;

const CandidateHome = () => {
  const { authToken, logout } = useContext(AuthContext);
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    } else {
      fetchData();
    }
  }, [authToken, navigate]);

  const fetchData = async () => {
    try {
      const referralResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const serviceResponse = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setReferrals(referralResponse.data);
      setServices(serviceResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data');
    }
  };

  const handleSearch = (query) => {
    const filteredReferrals = referrals.filter(referral => referral.id.toString().includes(query));
    const filteredServices = services.filter(service => service.id.toString().includes(query));
    setReferrals(filteredReferrals);
    setServices(filteredServices);
  };

  return (
    <Container>
      <Header>
        <h2>Candidate Home</h2>
        <Button onClick={logout}>Logout</Button>
      </Header>
      <Search onSearch={handleSearch} />
      <Section type="referral">
        <h3>Referrals</h3>
        <ListContainer>
          {referrals.map(referral => (
            <ListCard key={referral.id} title={referral.title} description={referral.body} type="referral" />
          ))}
        </ListContainer>
      </Section>
      <Section type="service">
        <h3>Services</h3>
        <ListContainer>
          {services.map(service => (
            <ListCard key={service.id} title={service.name} description={service.body} type="service" />
          ))}
        </ListContainer>
      </Section>
    </Container>
  );
};

export default CandidateHome;
