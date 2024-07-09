import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 30px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #667eea;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #764ba2;
  }
`;

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search by ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </SearchContainer>
  );
};

export default Search;
