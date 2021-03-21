// Layout/Edit/Delete

import styled from 'styled-components';
import LocationForm from '../site/LocationForm';

const CardContainer = () => {
  return (
    <Card>
      <CardText>Card</CardText>
    </Card>
  );
};

export default CardContainer;

//===================
// Styled-Components
//===================

const Card = styled.div`
  padding: 1rem;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: rgba(52, 99, 140, 0.8);
`;

const CardText = styled.h1`
  font-weight: bold;
  color: #fff;
`;
