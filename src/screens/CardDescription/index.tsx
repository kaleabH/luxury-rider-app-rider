import React from 'react';
import styled from 'styled-components/native';

const CardDescription: React.FC = ({ route }: any) => {
  return (
    <Container>
      <Title>{route.params.name}</Title>
      {/* Add description details here */}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export default CardDescription;
