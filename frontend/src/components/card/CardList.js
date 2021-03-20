// Displays list of weather cards

import styled from 'styled-components';
import CardContainer from './CardContainer';

const CardList = () => {
  return (
    <List>
      <CardContainer />
    </List>
  );
};

export default CardList;

//===================
// Styled-Components
//===================

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin: 2rem;
`;
