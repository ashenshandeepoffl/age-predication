import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { useState } from 'react';

// Styled components for a modern and minimalist theme
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  font-family: 'Arial', sans-serif;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Result = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
`;

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <Container>
      <Input
        placeholder="Enter your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <Button onClick={fetchData}>Predict Your Age</Button>

      {predictedAge && (
        <>
          <Result>Name: {predictedAge.name}</Result>
          <Result>Age: {predictedAge.age}</Result>
          <Result>Count: {predictedAge.count}</Result>
        </>
      )}
    </Container>
  );
}

export default App;
